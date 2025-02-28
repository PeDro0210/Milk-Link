FROM rust:alpine

WORKDIR /Milk-Backend-dir

COPY . .

RUN cargo build --release


EXPOSE 5000/tcp


RUN ./target/release/Milk-Backend




