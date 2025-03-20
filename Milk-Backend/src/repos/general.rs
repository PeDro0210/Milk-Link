//TODO: implement redis later in this repo
use crate::{
    config::Env,
    schemas::link::{dummy_link, Link},
};

use redis::{cmd, Client, JsonCommands, Value as RedisValue};
use serde_json::{json, Value as JsonValue};

pub struct LinkRepo {
    client: Client,
}

impl LinkRepo {
    pub fn init() -> LinkRepo {
        //! For debugging
        //let config: Env = Env::env_init();
        let client = Client::open("redis://:harukogoty3721@localhost:6379");

        match client {
            Ok(unwrap_client) => {
                return LinkRepo {
                    client: unwrap_client,
                }
            }
            Err(_) => panic!("can't stablish connection with Redis Server"),
        }
    }
    //TODO: add the Result Wraper and redis implementation
    pub async fn get_links(&self) -> Vec<Link> {
        let mut con = self.client.get_connection().unwrap();

        //TODO: pass the name_list with values parse as parameter for the key of link_list json_get
        let name_lists = cmd("SCAN").cursor_arg(0).query::<Vec<RedisValue>>(&mut con);

        let link_lists = match con
            .json_get::<Vec<&str>, &str, Vec<RedisValue>>(vec!["links:Steam", "links:Twitter"], "$")
        {
            Ok(data) => data,
            Err(e) => panic!("{:} Can't get link", e),
        };

        println!("{:?}", name_lists);
        println!("{:?}", link_lists);

        return vec![dummy_link()];
    }
}
