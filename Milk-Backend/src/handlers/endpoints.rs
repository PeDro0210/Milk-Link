use actix_web::{web, HttpResponse};
use juniper::http::{graphiql::graphiql_source, GraphQLRequest};

use super::graphql::{create_schema, Context, Schema};

//I stole this code from the repo

async fn health() -> HttpResponse {
    HttpResponse::Ok().finish()
}

pub fn app_config(config: &mut web::ServiceConfig) {
    let schema = create_schema();
    config
        .app_data(schema)
        .service(web::resource("/graphql").route(web::post().to(graphql)))
        .service(web::resource("/graphiql").route(web::get().to(graphiql)))
        .service(web::resource("/").route(web::get().to(health)));
}

//For displaying the grapiql page (for trying queries)
async fn graphiql() -> HttpResponse {
    let html = graphiql_source("/graphiql", Some("/subscriptions"));

    HttpResponse::Ok()
        .content_type("text/html; charset=utf-8")
        .body(html)
}

//For for accepting schemas
async fn graphql(data: web::Json<GraphQLRequest>, schema: web::Data<Schema>) -> HttpResponse {
    let context = Context {};
    let res = data.execute(&schema, &context).await;

    HttpResponse::Ok().json(res)
}
