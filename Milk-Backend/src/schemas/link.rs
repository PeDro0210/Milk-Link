use juniper::GraphQLObject;
use serde::{Deserialize, Serialize};

//TODO: Add the redis dependencies and mappers
#[derive(Clone, Serialize, Deserialize, GraphQLObject, Debug)]
pub struct Link {
    pub key: i32,
    pub link: String,
    pub title: String,
    pub window_photo_url: String,
    pub taskbar_icon_url: String,
    pub startmenu_icon_url: String,
}

pub fn dummy_link() -> Link {
    return Link {
        key: -1,
        link: "".to_string(),
        title: "PLACEHOLDER".to_string(),
        window_photo_url: "".to_string(),
        taskbar_icon_url: "".to_string(),
        startmenu_icon_url: "".to_string(),
    };
}
