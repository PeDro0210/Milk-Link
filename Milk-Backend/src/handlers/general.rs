use crate::schemas::link::Link;
use juniper::{EmptyMutation, FieldError, RootNode};

#[derive(Clone)]
pub struct Context {}

impl juniper::Context for Context {}

pub struct Query {}

#[juniper::graphql_object(
    Context = Context,
)]
impl Query {
    pub async fn links(context: &Context) -> Result<Vec<Link>, FieldError> {
        unimplemented!();
    }
}
