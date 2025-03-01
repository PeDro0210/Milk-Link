mod config;
mod handlers;
mod repos;
mod schemas;

use actix_cors::Cors;
use actix_web::{App, HttpServer};
use handlers::endpoints::app_config;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    //* For production
    //let config = Env::env_init();

    // let port = config.port;
    // let host = config.host;

    //* debugging
    let host = "0.0.0.0".to_string();
    let port = 5000 as u16;

    std::env::set_var("RUST_LOG", "debug");
    env_logger::init();

    HttpServer::new(move || {
        //TODO: change this to default and select the corresponded origin, methods and headers
        let cors = Cors::permissive();

        App::new().configure(app_config).wrap(cors)
    })
    .bind((host, port))?
    .run()
    .await
}
