use juniper::GraphQLObject;
use serde::{Deserialize, Serialize};

//TODO: Add the redis dependencies and mappers
#[derive(Clone, Serialize, Deserialize, GraphQLObject)]
pub struct Link {
    pub link: String,
    pub icon_url: String,
    pub image_url: String,
    pub text: String,
}

pub fn dummy_link() -> Link {
    return Link {
        link: "youtube.com".to_string(),
        icon_url: "https://cdn.staticneo.com/w/streetfighter/thumb/Sakura.jpg/250px-Sakura.jpg"
            .to_string(),
        image_url: "https://cdn.staticneo.com/w/streetfighter/thumb/Sakura.jpg/250px-Sakura.jpg"
            .to_string(),
        text: "Sakura".to_string(),
    };
}
