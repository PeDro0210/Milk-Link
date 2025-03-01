//TODO: implement redis later in this repo
use crate::schemas::link::{dummy_link, Link};

pub struct LinkRepo {}

impl LinkRepo {
    //TODO: add the Result Wraper and redis implementation
    pub async fn get_users(&self) -> Vec<Link> {
        return vec![dummy_link()];
    }
}
