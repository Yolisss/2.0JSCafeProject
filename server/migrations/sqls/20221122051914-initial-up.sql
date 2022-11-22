/* Replace with your SQL commands */
CREATE TABLE public.coffee_facts (
    id integer NOT NULL,
    fact text,
    description text
);
CREATE TABLE public.new_drinks (
    id integer NOT NULL,
    title text,
    description text,
    ingredients text,
    image text
);

CREATE TABLE public.users (
    id integer NOT NULL,
    name text,
    email character varying,
    sub character varying,
    picture character varying
);

SELECT pg_catalog.setval('public.coffee_facts_id_seq', 11, true);

SELECT pg_catalog.setval('public.new_drinks_id_seq', 21, true);

SELECT pg_catalog.setval('public.users_id_seq', 13, true);

