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

ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
ALTER TABLE ONLY public.new_drinks DROP CONSTRAINT new_drinks_pkey;
ALTER TABLE ONLY public.coffee_facts DROP CONSTRAINT coffee_facts_pkey;
DROP TABLE public.users;
DROP TABLE public.new_drinks;
DROP TABLE public.coffee_facts;
SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: coffee_facts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.coffee_facts (
    id integer NOT NULL,
    fact text,
    description text
);


--
-- Name: coffee_facts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
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
-- Name: new_drinks; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.new_drinks (
    id integer NOT NULL,
    title text,
    description text,
    ingredients text,
    image text
);


--
-- Name: new_drinks_id_seq; Type: SEQUENCE; Schema: public; Owner: -
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
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text,
    email character varying,
    sub character varying,
    picture character varying
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
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
-- Data for Name: coffee_facts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.coffee_facts OVERRIDING SYSTEM VALUE VALUES (2, 'The Netherlands Consume The Most Coffee', 'According to a 2020 study, the Netherlands were said to consume the most coffee per capita with a whopping 8.3 kilograms!

They were followed by Finland at 7.8 and Sweden at 7.6. Despite our best efforts, the UK didn’t even rank in the top fifteen for the most coffee addicted countries!

');
INSERT INTO public.coffee_facts OVERRIDING SYSTEM VALUE VALUES (3, 'Coffee Beans Aren''t Beans', 'Contrary to the name, a coffee bean isn’t actually a bean.

Rather, it’s the pit (or seed) that’s found inside the coffee cherry. The bean is removed from the fruit as part of the harvest process.

Because of their shape and size, they’re now commonly referred to as a bean but, assuming the conditions are right, you could plant one and it could grow into a whole new coffee plant.');
INSERT INTO public.coffee_facts OVERRIDING SYSTEM VALUE VALUES (4, 'There''s A Coffee Made From Poo...', 'We know how that sounds, but bear with us!

Originating from Indonesia, the Kopi Luwak is one of the most sought after coffees in the world. It’s produced with the help of the adorable palm civet who eat the coffee cherries and then… pass the beans.

The unique fermentation process that occurs as the beans travel through the civet’s digestive tract is said to offer a smooth finish and very distinctive flavour to the final brew.

Not only is this one of the most bizarre methods of making coffee, but for up to over £400 a kilogram, Kopi Luwak is also one of the most expensive coffees available in the world today.');
INSERT INTO public.coffee_facts OVERRIDING SYSTEM VALUE VALUES (5, 'The Etymology Of The Word "Coffee"', 'The earliest term for the drink of coffee was the Arabic word “qahwah”, which actually referred to a type of wine.

The Ottoman Turks then used the term “kahve”, which was followed by the Dutch word “koffie”, from which the English name was derived in 1582.');
INSERT INTO public.coffee_facts OVERRIDING SYSTEM VALUE VALUES (6, 'Why People Confuse Espresso And Expresso', 'The correct pronunciation of “espresso” is an age-old argument that coffee enthusiasts have been having for years! But as it turns out, those who call it an “expresso” aren’t entirely in the wrong.

The Italian term espresso means “expressed” or “pressed out”. This is because espressos are made by forcing very hot water under high pressure through finely-ground coffee beans. So, while the correct pronunciation is ES-presso, you can see where people are coming from.');
INSERT INTO public.coffee_facts OVERRIDING SYSTEM VALUE VALUES (7, 'The World''s Largest Cup Pf Coffee Was Over 20,000 Liters', 'As of 15th June 2019, the largest cup of coffee ever made contained a whopping 22,739.14 litres and was recorded in the Guinness Book of World Records.

The cup was created by Alcaldía Municipal de Chinchiná (Colombia) at Parque de Bolívar, Chinchiná, Caldas, Colombia and took over a month with fifty people working on the project.

');
INSERT INTO public.coffee_facts OVERRIDING SYSTEM VALUE VALUES (8, 'People Have Tried To Ban Coffee', 'In its early years, there were plenty of different groups across the world that tried to ban our favourite beverage.

Typically, it was because of coffee’s stimulating effect or the particular crowd it attracted. Coffee Houses fast became a spot for free thinkers to discuss their ideas. One particular instance was in Mecca all the way back in 1511 where the governor feared coffee might unite his opposition.');
INSERT INTO public.coffee_facts OVERRIDING SYSTEM VALUE VALUES (9, 'Coffee Is One Of The Most Consumed Drinks In The World', 'This isn’t all that surprising, is it?

Alongside water and tea, coffee is one of the most popular drinks worldwide with over 400 billion cups of it being consumed each year.

Britain alone consumes approximately 2.8 kilos of coffee per person, per year and over £1 billion was spent on coffee last year.');
INSERT INTO public.coffee_facts OVERRIDING SYSTEM VALUE VALUES (10, 'Coffee Was Discovered By A Goat Herder', 'All the way back in the 1500s, it was said that a goat herder in Ethiopia discovered coffee after observing strange behaviour in his goats.

He noticed that after they ate coffee cherries, they suddenly had a lot of energy and were unable to sleep at night. He shared his findings with local monks who made their own drinks from the coffee beans and the rest, as they say, is history.');
INSERT INTO public.coffee_facts OVERRIDING SYSTEM VALUE VALUES (11, 'Coffee Helps You Live Longer', 'This may be our favourite one yet.

Thanks to it being jam-packed with antioxidants, coffee remains one of the healthiest beverages in the world.

Of course, if you choose to add cream, sugar or syrup then this health factor may be impacted, but otherwise, when consumed as part of a healthy balanced diet and lifestyle, coffee can help people to live longer, happier lives.

');


--
-- Data for Name: new_drinks; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.new_drinks OVERRIDING SYSTEM VALUE VALUES (21, 'Iced Matcha Green Tea Latte', 'Light, creamy, and refreshing iced matcha latte made at home!', '12oz Milk of Choice, 2 tsp matcha poweder, 2 tsp Vanilla Syrup or honey, or sugar, 1 cup ice', 'https://gimmedelicious.com/wp-content/uploads/2018/03/Iced-Matcha-Latte2.jpg');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (1, 'Yolisma', 'yolisisabel28@gmail.com', 'google-oauth2|112601203965052783704', 'https://lh3.googleusercontent.com/a/ALm5wu1k3wBHV_MM9Oq_2bYprODU_VIw-DIQMinmknTBoA=s96-c');
INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (13, 'zacarias.yolisma@yahoo.com', 'zacarias.yolisma@yahoo.com', 'auth0|636abe2f00f9138b729bda75', 'https://s.gravatar.com/avatar/03d6237924a5972ed09f81091517787c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fza.png');


--
-- Name: coffee_facts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.coffee_facts_id_seq', 11, true);


--
-- Name: new_drinks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.new_drinks_id_seq', 21, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 13, true);


--
-- Name: coffee_facts coffee_facts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.coffee_facts
    ADD CONSTRAINT coffee_facts_pkey PRIMARY KEY (id);


--
-- Name: new_drinks new_drinks_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.new_drinks
    ADD CONSTRAINT new_drinks_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

