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
            .query::<Vec<RedisValue>>(&mut con)
        {
            Ok(mut data) => {
                //Remving the quantity of items cause redis returns it for some reason
                data.remove(0);
                //Removing the first key, cause of how step_by works
                data.remove(0);

                for index in (0..data.len()).step_by(2) {
                    let nested_data = from_redis_value::<Vec<String>>(&data[index]).unwrap();
                    let json_value = from_str::<Link>(nested_data[1].as_str()).unwrap();
                    link_lists.push(json_value);
                }
            }
            Err(e) => panic!("Can't get list of names, ERROR:{:}", e),
        };
        return link_lists;
    }
}
