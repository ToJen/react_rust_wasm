# react_rust_wasm

Playing around with some WASM and Rust.

Based off [this](https://www.fullstackreact.com/articles/rust-react-and-web-assembly/) article by [@anderspitman](https://github.com/anderspitman).

## To run

This repo uses [npx](https://www.npmjs.com/package/npx)!

### Configure Rust

- `rustup default nightly`
- `rustup target add wasm32-unknown-unknown`
- `cargo install wasm-bindgen-cli`

### Setup repo

- `npm i`
- `npm i -g http-server # this makes life easy`
- `mkdir build && npm run build`
- `npm start # runs on port 8080`
