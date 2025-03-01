use crate::{repos::general::LinkRepo, schemas::link::Link};
use juniper::{EmptyMutation, EmptySubscription, RootNode};

#[derive(Clone)]
pub struct Context {}

impl Context {
    //FUCKING REPOS, THEY FORCE ME IN TO OOP
    fn link_repo(&self) -> LinkRepo {
        return LinkRepo {};
    }
}

//I don't like this rust boilerplate, but meh, Ig rust doesn't adapt that good to abstractions
impl juniper::Context for Context {}

pub struct Query {}

#[juniper::graphql_object(
    Context = Context,
)]
impl Query {
    //Add error type safety
    pub async fn links(context: &Context) -> Vec<Link> {
        return context.link_repo().get_users().await;
    }
}

pub type Schema = RootNode<'static, Query, EmptyMutation<Context>, EmptySubscription<Context>>;

pub fn create_schema() -> Schema {
    Schema::new(
        Query {},
        EmptyMutation::<Context>::new(),
        EmptySubscription::<Context>::new(),
    )
}
