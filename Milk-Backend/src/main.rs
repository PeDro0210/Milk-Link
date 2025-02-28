use actix_cors::Cors;
use actix_web::{App, HttpServer};

use dotenv::dotenv;
use std::env::var;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();

    //env variables
    let host = var("HOST").unwrap();
    let port = var("PORT").unwrap();

    //needed casts
    let port = port.parse::<u16>().unwrap();

    //TODO:Wrap the cors and the services
    HttpServer::new(|| App::new())
        .bind((host, port))?
        .run()
        .await
}
