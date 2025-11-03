use envconfig::Envconfig;

#[derive(Envconfig)]
pub struct Env {
    #[envconfig(from = "HOST")]
    pub host: String,

    #[envconfig(from = "PORT")]
    pub port: u16,

    #[envconfig(from = "WEBVIEW_URL")]
    pub webview_url: String,

    #[envconfig(from = "REDIS_URL")]
    pub redis_url: String,
}

impl Env {
    pub fn env_init() -> Env {
        return Env::init_from_env().unwrap();
    }
}
