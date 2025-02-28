FROM rust:alpine3.21

WORKDIR /Milk-Backend-dir

# Idunno why this line, but it installed all needed dependencies
RUN apk add --no-cache musl-dev

COPY . .

RUN cargo build --release


EXPOSE 5000/tcp


RUN ./target/release/Milk-Backend




