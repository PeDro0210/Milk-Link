//TODO: implement redis later in this repo
use crate::{
    config::Env,
    schemas::link::{dummy_link, Link},
};

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
    //TODO: add the Result Wraper and redis implementation
    pub async fn get_links(&self) -> Vec<Link> {
        let mut con = self.client.get_connection().unwrap();
        let mut names_list = vec![];
        let mut link_lists = vec![];

        //* This won't scale for the long run, luckly I won't have that much json hashes
        match cmd("SCAN").cursor_arg(0).query::<Vec<RedisValue>>(&mut con) {
            Ok(mut data) => {
                //Removes the cursor argument, cause of some fucking reason it goes with the whole
                //query
                data.remove(0);

                //Had to asume a lot of values and do a lot of weird castings
                //Getting in to the first element, cause the value list was nested
                let nested_data =
                    from_redis_value::<Vec<RedisValue>>(data.get(0).unwrap()).unwrap();
                let mut parsed_name_lists: Vec<String> = vec![];

                //for each value in the nested_data (being the nested list inside the SCAN query),
                //turns it's value in to a String Rust Value
                nested_data
                    .iter()
                    .for_each(|value| match from_redis_value::<String>(value) {
                        Ok(value) => names_list.push(value),
                        Err(e) => panic!("Error parsing names value: {}", e),
                    });
            }
            Err(e) => panic!("Can't get list of names, ERROR:{:}", e),
        };

        match con.json_get::<Vec<String>, &str, Vec<RedisValue>>(names_list.clone(), ".") {
            Ok(data) => data
                .iter()
                .for_each(|value| match from_redis_value::<String>(value) {
                    Ok(value) => link_lists.push(from_str::<Link>(value.as_str()).unwrap()),
                    Err(e) => panic!("Error parsing links: {}", e),
                }),
            Err(e) => panic!("Can't get link, ERROR {:}", e),
        };

        return link_lists;
    }
}
