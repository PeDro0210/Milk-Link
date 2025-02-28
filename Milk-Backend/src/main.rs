mod config;

use actix_cors::Cors;
use actix_web::{cookie::time::format_description::well_known::iso8601::Config, App, HttpServer};
use config::Env;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let config = Env::env_init();

    let port = config.port;
    let host = config.host;

    HttpServer::new(move || {
        //TODO: change this to default and select the corresponded origin, methods and headers
        let cors = Cors::permissive();

        App::new().wrap(cors)
    })
    .bind((host, port))?
    .run()
    .await
}
