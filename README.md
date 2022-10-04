This is an OAuth2 server example using node-oauth2-server.

## run the program 
node index.js

### register
curl -X POST http://localhost:3000/auth/register -d "grant_type=password" -d "username=ped" -d "password=password" -d "client_id=null" -d "client_secret=null" -H "Content-Type: application/x-www-form-urlencoded"

### login
curl -X POST http://localhost:3000/auth/login -d "grant_type=password" -d "username=ped" -d "password=password" -d "client_id=null" -d "client_secret=null" -H "Content-Type: application/x-www-form-urlencoded"

### protected API
curl -X GET http://localhost:3000/test/hello -H "Authorization: Bearer 384a190b898db46a186d2f6b4f7f5639e430f694"

## create database
CREATE DATABASE example_oauth2;

## create tables
CREATE TABLE public.users
(
    id serial,
    username text,
    user_password text,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.users
    OWNER to postgres;



CREATE TABLE public.access_tokens
(
    id serial,
    access_token text,
    user_id integer,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.access_tokens
    OWNER to postgres;