--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: coffee_facts; Type: TABLE; Schema: public; Owner: yolismazacarias
--

CREATE TABLE public.coffee_facts (
    id integer NOT NULL,
    fact text
);


ALTER TABLE public.coffee_facts OWNER TO yolismazacarias;

--
-- Name: coffee_facts_id_seq; Type: SEQUENCE; Schema: public; Owner: yolismazacarias
--

ALTER TABLE public.coffee_facts ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.coffee_facts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: new_drinks; Type: TABLE; Schema: public; Owner: yolismazacarias
--

CREATE TABLE public.new_drinks (
    id integer NOT NULL,
    title text,
    description text,
    ingredients text,
    image character varying
);


ALTER TABLE public.new_drinks OWNER TO yolismazacarias;

--
-- Name: new_drinks_id_seq; Type: SEQUENCE; Schema: public; Owner: yolismazacarias
--

ALTER TABLE public.new_drinks ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.new_drinks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: yolismazacarias
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text,
    email character varying,
    sub character varying,
    picture character varying
);


ALTER TABLE public.users OWNER TO yolismazacarias;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: yolismazacarias
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: coffee_facts; Type: TABLE DATA; Schema: public; Owner: yolismazacarias
--



--
-- Data for Name: new_drinks; Type: TABLE DATA; Schema: public; Owner: yolismazacarias
--

INSERT INTO public.new_drinks (id, title, description, ingredients, image) OVERRIDING SYSTEM VALUE VALUES (1, 'Matcha Espresso Fusion', 'green tea and expresso with milk', 'matcha, room temperature water, cold milk, hot espresso coffee, granulated sugar, crushed ice', NULL);
INSERT INTO public.new_drinks (id, title, description, ingredients, image) OVERRIDING SYSTEM VALUE VALUES (2, 'Layered Strawberry Matcha Latte ', 'refreshing drink blended with fresh strawberries, milk, and matcha green tea ', 'strawberry sauce, ice, milk, matcha, hot water', NULL);
INSERT INTO public.new_drinks (id, title, description, ingredients, image) OVERRIDING SYSTEM VALUE VALUES (3, 'Matcha Chai Latte', 'warm spices infused in the black tea, with sugar and milk', 'black tea, chai spices: green cardamom, black, cardamom, cloves, cinnamon stick, black peppercorn, fennel, star anise, fresh ginger, granulated sugar, water, whole milk and ice', NULL);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: yolismazacarias
--

INSERT INTO public.users (id, name, email, sub, picture) OVERRIDING SYSTEM VALUE VALUES (1, 'Yolisma', 'yolisisabel28@gmail.com', 'google-oauth2|112601203965052783704', 'https://lh3.googleusercontent.com/a/ALm5wu1k3wBHV_MM9Oq_2bYprODU_VIw-DIQMinmknTBoA=s96-c');
INSERT INTO public.users (id, name, email, sub, picture) OVERRIDING SYSTEM VALUE VALUES (13, 'zacarias.yolisma@yahoo.com', 'zacarias.yolisma@yahoo.com', 'auth0|636abe2f00f9138b729bda75', 'https://s.gravatar.com/avatar/03d6237924a5972ed09f81091517787c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fza.png');


--
-- Name: coffee_facts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yolismazacarias
--

SELECT pg_catalog.setval('public.coffee_facts_id_seq', 1, false);


--
-- Name: new_drinks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yolismazacarias
--

SELECT pg_catalog.setval('public.new_drinks_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yolismazacarias
--

SELECT pg_catalog.setval('public.users_id_seq', 13, true);


--
-- Name: coffee_facts coffee_facts_pkey; Type: CONSTRAINT; Schema: public; Owner: yolismazacarias
--

ALTER TABLE ONLY public.coffee_facts
    ADD CONSTRAINT coffee_facts_pkey PRIMARY KEY (id);


--
-- Name: new_drinks new_drinks_pkey; Type: CONSTRAINT; Schema: public; Owner: yolismazacarias
--

ALTER TABLE ONLY public.new_drinks
    ADD CONSTRAINT new_drinks_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: yolismazacarias
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

