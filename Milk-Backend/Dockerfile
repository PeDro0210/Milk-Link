FROM rust:alpine3.21

WORKDIR /Milk-Backend-dir

# idunno how tf they expected for me to find this line
RUN apk add --no-cache musl-dev

COPY . .

RUN cargo build --release


EXPOSE 5000/tcp


RUN ./target/release/Milk-Backend




