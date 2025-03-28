use std::ops::Index;

//TODO: implement redis later in this repo
use crate::{config::Env, schemas::link::Link};

use redis::{cmd, from_redis_value, Client, JsonCommands, Value as RedisValue};
use serde_json::from_str;

pub struct LinkRepo {
    client: Client,
}

impl LinkRepo {
    pub fn init() -> LinkRepo {
        let config: Env = Env::env_init();
        let client = Client::open(config.redis_url);

        match client {
            Ok(unwrap_client) => {
                return LinkRepo {
                    client: unwrap_client,
                }
            }
            Err(_) => panic!("can't stablish connection with Redis Server"),
        }
    }

    pub async fn get_links(&self) -> Vec<Link> {
        let mut con = self.client.get_connection().unwrap();
        let mut link_lists = vec![];

        //* This won't scale for the long run, luckly I won't have that much json hashes
        match cmd("FT.SEARCH")
            .arg("links:index")
            .arg("*")
            .arg("RETURN")
            .arg("5")
            .arg("$.link")
            .arg("$.title")
            .arg("$.window_photo_url")
            .arg("$.taskbar_icon_url")
            .arg("$.startmenu_icon_url")
            .query::<Vec<RedisValue>>(&mut con)
        {
            Ok(mut data) => {
                data.remove(0);

                println!("{data:?}");
                //Cast the serialize Json in to the Link Sturct
                //TODO: remove the titles
                data.iter().for_each(|value| {
                    //Checks if it has the structure path, json
                    match from_redis_value::<Vec<String>>(value) {
                        Ok(value) => {
                            link_lists.push(from_str::<Link>(value.index(1).as_str()).unwrap())
                        }
                        Err(error) => println!("Nothing to worry about"),
                    }
                })
            }
            Err(e) => panic!("Can't get list of names, ERROR:{:}", e),
        };

        return link_lists;
    }
}
