

CREATE DATABASE purchases;
\c purchases;

CREATE SCHEMA purchases;

CREATE TABLE IF NOT EXISTS purchase_entity (
id BIGSERIAL PRIMARY KEY,
title VARCHAR,
description VARCHAR,
price INTEGER
);

CREATE TABLE IF NOT EXISTS position_entity (
id BIGSERIAL PRIMARY KEY,
title VARCHAR,
description VARCHAR,
price INTEGER
);

INSERT INTO position_entity (title, description, price)
VALUES ('T-Shirt', 'Casual cotton t-shirt', 2000),
       ('Jeans', 'Slim-fit denim jeans', 5000),
       ('Hoodie', 'Pullover hoodie with kangaroo pocket', 3500),
       ('Sneakers', 'Classic canvas sneakers', 4000),
       ('Bomber Jacket', 'Lightweight bomber jacket with ribbed collar and cuffs', 7500),
       ('Chinos', 'Slim-fit chino pants', 5500),
       ('Polo Shirt', 'Classic polo shirt with embroidered logo', 3000),
       ('Blazer', 'Single-breasted wool blazer', 9500),
       ('Dress Shoes', 'Leather dress shoes with cap toe', 8000),
       ('Shorts', 'Cargo shorts with multiple pockets', 3500);