/* Replace with your SQL commands */
CREATE TABLE coffee_facts (
    id integer NOT NULL,
    fact text,
    description text
);
CREATE TABLE new_drinks (
    id integer NOT NULL,
    title text,
    description text,
    ingredients text,
    image text
);

CREATE TABLE users (
    id integer NOT NULL,
    name text,
    email character varying,
    sub character varying,
    picture character varying
);


