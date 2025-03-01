use juniper::GraphQLObject;
use serde::{Deserialize, Serialize};

//Add the redis dependencies and mappers
#[derive(Clone, Serialize, Deserialize, GraphQLObject)]
pub struct Link {
    pub link: String,
    pub icon_url: String,
    pub image_url: String,
    pub text: String,
}

pub fn dummy_link() -> Link {
    return Link {
        link: "".to_string(),
        icon_url: "".to_string(),
        image_url: "".to_string(),
        text: "".to_string(),
    };
}
