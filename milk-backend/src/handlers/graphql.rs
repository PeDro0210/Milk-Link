use crate::{repos::general::LinkRepo, schemas::link::Link};
use actix_web::web;
use juniper::{EmptyMutation, EmptySubscription, RootNode};

//* All context and repos

#[derive(Clone)]
pub struct Context {}

impl Context {
    //FUCKING REPOS, THEY FORCE ME IN TO OOP
    fn link_repo(&self) -> LinkRepo {
        return LinkRepo::init();
    }
}

//* Queries

//I don't like this rust boilerplate, but meh, Ig rust doesn't adapt that good to abstractions
impl juniper::Context for Context {}

pub struct Query {}

#[juniper::graphql_object(
    Context = Context,
)]
impl Query {
    //Add error type safety
    pub async fn get_links(context: &Context) -> Vec<Link> {
        return context.link_repo().get_links().await;
    }
}

//* Schemas side
pub type Schema = RootNode<'static, Query, EmptyMutation<Context>, EmptySubscription<Context>>;

pub fn create_schema() -> web::Data<Schema> {
    let schema = RootNode::new(Query {}, EmptyMutation::new(), EmptySubscription::new());

    // I always need for passing the squema to actix
    return web::Data::new(schema);
}
