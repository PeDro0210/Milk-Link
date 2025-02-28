use juniper::GraphQLObject;
use serde::{Deserialize, Serialize};

//Add the redis dependencies and mappers
#[derive(Clone, Serialize, Deserialize, GraphQLObject)]
pub struct Link {
    pub link: String,
    pub icon: String,
    pub image: String,
    pub text: String,
}
