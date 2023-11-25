--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.10
-- Dumped by pg_dump version 9.6.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: _auth_group; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._auth_group (
    id character varying(1) DEFAULT NULL::character varying,
    name character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._auth_group OWNER TO rebasedata;

--
-- Name: _auth_group_permissions; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._auth_group_permissions (
    id character varying(1) DEFAULT NULL::character varying,
    group_id character varying(1) DEFAULT NULL::character varying,
    permission_id character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._auth_group_permissions OWNER TO rebasedata;

--
-- Name: _auth_permission; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._auth_permission (
    id smallint,
    content_type_id smallint,
    codename character varying(18) DEFAULT NULL::character varying,
    name character varying(23) DEFAULT NULL::character varying
);


ALTER TABLE public._auth_permission OWNER TO rebasedata;

--
-- Name: _auth_user; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._auth_user (
    id smallint,
    password character varying(88) DEFAULT NULL::character varying,
    last_login character varying(10) DEFAULT NULL::character varying,
    is_superuser smallint,
    username character varying(5) DEFAULT NULL::character varying,
    last_name character varying(1) DEFAULT NULL::character varying,
    email character varying(1) DEFAULT NULL::character varying,
    is_staff smallint,
    is_active smallint,
    date_joined character varying(10) DEFAULT NULL::character varying,
    first_name character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._auth_user OWNER TO rebasedata;

--
-- Name: _auth_user_groups; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._auth_user_groups (
    id character varying(1) DEFAULT NULL::character varying,
    user_id character varying(1) DEFAULT NULL::character varying,
    group_id character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._auth_user_groups OWNER TO rebasedata;

--
-- Name: _auth_user_user_permissions; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._auth_user_user_permissions (
    id character varying(1) DEFAULT NULL::character varying,
    user_id character varying(1) DEFAULT NULL::character varying,
    permission_id character varying(1) DEFAULT NULL::character varying
);


ALTER TABLE public._auth_user_user_permissions OWNER TO rebasedata;

--
-- Name: _blog_api_blog; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._blog_api_blog (
    id smallint,
    title character varying(26) DEFAULT NULL::character varying,
    slug character varying(24) DEFAULT NULL::character varying,
    excerpt character varying(87) DEFAULT NULL::character varying,
    content character varying(87) DEFAULT NULL::character varying,
    image character varying(39) DEFAULT NULL::character varying,
    ingredients character varying(87) DEFAULT NULL::character varying,
    postlabel character varying(7) DEFAULT NULL::character varying,
    category_id smallint,
    price numeric(4,2) DEFAULT NULL::numeric
);


ALTER TABLE public._blog_api_blog OWNER TO rebasedata;

--
-- Name: _blog_api_category; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._blog_api_category (
    id smallint,
    name character varying(21) DEFAULT NULL::character varying,
    image character varying(37) DEFAULT NULL::character varying
);


ALTER TABLE public._blog_api_category OWNER TO rebasedata;

--
-- Name: _django_admin_log; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._django_admin_log (
    id smallint,
    action_time character varying(10) DEFAULT NULL::character varying,
    object_id smallint,
    object_repr character varying(26) DEFAULT NULL::character varying,
    change_message character varying(40) DEFAULT NULL::character varying,
    content_type_id smallint,
    user_id smallint,
    action_flag smallint
);


ALTER TABLE public._django_admin_log OWNER TO rebasedata;

--
-- Name: _django_content_type; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._django_content_type (
    id smallint,
    app_label character varying(12) DEFAULT NULL::character varying,
    model character varying(11) DEFAULT NULL::character varying
);


ALTER TABLE public._django_content_type OWNER TO rebasedata;

--
-- Name: _django_migrations; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._django_migrations (
    id smallint,
    app character varying(12) DEFAULT NULL::character varying,
    name character varying(40) DEFAULT NULL::character varying,
    applied character varying(10) DEFAULT NULL::character varying
);


ALTER TABLE public._django_migrations OWNER TO rebasedata;

--
-- Name: _django_session; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._django_session (
    session_key character varying(32) DEFAULT NULL::character varying,
    session_data character varying(227) DEFAULT NULL::character varying,
    expire_date character varying(10) DEFAULT NULL::character varying
);


ALTER TABLE public._django_session OWNER TO rebasedata;

--
-- Name: _sqlite_sequence; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._sqlite_sequence (
    name character varying(19) DEFAULT NULL::character varying,
    seq smallint
);


ALTER TABLE public._sqlite_sequence OWNER TO rebasedata;

--
-- Data for Name: _auth_group; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: _auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: _auth_permission; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._auth_permission (id, content_type_id, codename, name) FROM stdin;
1	1	add_logentry	Can add log entry
2	1	change_logentry	Can change log entry
3	1	delete_logentry	Can delete log entry
4	1	view_logentry	Can view log entry
5	2	add_permission	Can add permission
6	2	change_permission	Can change permission
7	2	delete_permission	Can delete permission
8	2	view_permission	Can view permission
9	3	add_group	Can add group
10	3	change_group	Can change group
11	3	delete_group	Can delete group
12	3	view_group	Can view group
13	4	add_user	Can add user
14	4	change_user	Can change user
15	4	delete_user	Can delete user
16	4	view_user	Can view user
17	5	add_contenttype	Can add content type
18	5	change_contenttype	Can change content type
19	5	delete_contenttype	Can delete content type
20	5	view_contenttype	Can view content type
21	6	add_session	Can add session
22	6	change_session	Can change session
23	6	delete_session	Can delete session
24	6	view_session	Can view session
25	7	add_category	Can add category
26	7	change_category	Can change category
27	7	delete_category	Can delete category
28	7	view_category	Can view category
29	8	add_blog	Can add blog
30	8	change_blog	Can change blog
31	8	delete_blog	Can delete blog
32	8	view_blog	Can view blog
\.


--
-- Data for Name: _auth_user; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._auth_user (id, password, last_login, is_superuser, username, last_name, email, is_staff, is_active, date_joined, first_name) FROM stdin;
1	pbkdf2_sha256$260000$YyEnqkjsCQVrF1PQDUdnRo$1G5YpT7ABYZDW0RocDWqjTA51NJqvgBpMzJMte1RnOA=	2022-10-09	1	admin			1	1	2022-10-09	
2	pbkdf2_sha256$600000$NuSC32NuEgmElWCy0tzZMr$FWSih11jw/M3iAimp6GYfThTAOTjKoGTH4meXkBCQY8=	2023-11-16	1	isa			1	1	2023-11-16	
\.


--
-- Data for Name: _auth_user_groups; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._auth_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Data for Name: _auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Data for Name: _blog_api_blog; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._blog_api_blog (id, title, slug, excerpt, content, image, ingredients, postlabel, category_id, price) FROM stdin;
73	Bruschetta Classico	Bruschetta-Classico	Toasted baguette slices topped with fresh tomatoes, basil, and a hint of garlic.	Toasted baguette slices topped with fresh tomatoes, basil, and a hint of garlic.	image/Bruschetta_Classico.png	Toasted baguette slices topped with fresh tomatoes, basil, and a hint of garlic.	POPULAR	3	6.99
75	Stuffed Mushrooms	Stuffed-Mushrooms	Mushrooms filled with herbed cream cheese and baked.	Mushrooms filled with herbed cream cheese and baked.	image/Stuffed_Mushrooms_vSQIIqI.png	Mushrooms filled with herbed cream cheese and baked.		3	7.25
78	Cream of Mushroom	Cream-of-Mushroom	Creamy mushroom soup garnished with fresh herbs.	Creamy mushroom soup garnished with fresh herbs.	image/Cream_of_Mushroom_TJXJv7N.png	Creamy mushroom soup garnished with fresh herbs.		4	6.00
79	Minestrone	Minestrone	Traditional Italian vegetable soup with beans and pasta.	Traditional Italian vegetable soup with beans and pasta.	image/Minestrone_GxSmKMr.png	Traditional Italian vegetable soup with beans and pasta.		4	5.75
80	Tomato Basil Soup	Tomato-Basil-Soup	Rich and creamy tomato soup with a hint of basil.	Rich and creamy tomato soup with a hint of basil.	image/Tomato_Basil_Soup_RcDttwm.png	Rich and creamy tomato soup with a hint of basil.		4	6.25
85	Crispy Calamari	crispy-calamari	Lightly breaded and fried, served with marinara sauce.	Lightly breaded and fried, served with marinara sauce.	image/Crispy_Calamari_Tf3EEBf.png	Lightly breaded and fried, served with marinara sauce.		3	8.50
86	Stuffed Mushrooms	stuffed-mushrooms	Mushrooms filled with herbed cream cheese and baked.	Mushrooms filled with herbed cream cheese and baked.	image/Stuffed_Mushrooms.png	Mushrooms filled with herbed cream cheese and baked.		3	7.25
87	Caprese Salad	caprese-salad	Fresh mozzarella, tomatoes, basil, and balsamic glaze.	Fresh mozzarella, tomatoes, basil, and balsamic glaze.	image/Caprese_Salad.png	Fresh mozzarella, tomatoes, basil, and balsamic glaze.		3	9.00
88	Chicken Noodle Soup	chicken-noodle-soup	Classic soup with chicken, noodles, and vegetables in a savory broth.	Classic soup with chicken, noodles, and vegetables in a savory broth.	image/Chicken_Noodle_Soup.png	Classic soup with chicken, noodles, and vegetables in a savory broth.		4	5.50
89	Cream of Mushroom	cream-of-mushroom	Creamy mushroom soup garnished with fresh herbs.	Creamy mushroom soup garnished with fresh herbs.	image/Cream_of_Mushroom.png	Creamy mushroom soup garnished with fresh herbs.		4	6.00
90	Minestrone	minestrone	Traditional Italian vegetable soup with beans and pasta.	Traditional Italian vegetable soup with beans and pasta.	image/Minestrone.png	Traditional Italian vegetable soup with beans and pasta.		4	5.75
91	Tomato Basil Soup	tomato-basil-soup	Rich and creamy tomato soup with a hint of basil.	Rich and creamy tomato soup with a hint of basil.	image/Tomato_Basil_Soup.png	Rich and creamy tomato soup with a hint of basil.		4	6.25
92	Caesar Salad	caesar-salad	Crisp romaine lettuce, Parmesan cheese, and croutons, tossed in Caesar dressing.	Crisp romaine lettuce, Parmesan cheese, and croutons, tossed in Caesar dressing.	image/Caesar_Salad_GwcLZz5.png	Crisp romaine lettuce, Parmesan cheese, and croutons, tossed in Caesar dressing.	POPULAR	5	7.50
93	Greek Salad	greek-salad	Mixed greens, feta cheese, olives, cucumbers, and tomatoes with Greek dressing.	Mixed greens, feta cheese, olives, cucumbers, and tomatoes with Greek dressing.	image/Greek_Salad_gtIbtnr.png	Mixed greens, feta cheese, olives, cucumbers, and tomatoes with Greek dressing.	POPULAR	5	8.00
94	Garden Salad	garden-salad	Fresh greens, tomatoes, cucumbers, and carrots with your choice of dressing.	Fresh greens, tomatoes, cucumbers, and carrots with your choice of dressing.	image/Garden_Salad.png	Fresh greens, tomatoes, cucumbers, and carrots with your choice of dressing.		5	6.99
95	Spinach & Strawberry Salad	spinach-strawberry-salad	Baby spinach, strawberries, almonds, and goat cheese with a vinaigrette.	Baby spinach, strawberries, almonds, and goat cheese with a vinaigrette.	image/Spinach__Strawberry_Salad.png	Baby spinach, strawberries, almonds, and goat cheese with a vinaigrette.		5	8.50
96	Grilled Salmon	grilled-salmon	Salmon fillet grilled to perfection, served with vegetables and rice.	Salmon fillet grilled to perfection, served with vegetables and rice.	image/Grilled_Salmon.png	Salmon fillet grilled to perfection, served with vegetables and rice.		6	15.99
97	Chicken Parmesan	chicken-parmesan	Breaded chicken breast topped with marinara and melted cheese, served with pasta.	Breaded chicken breast topped with marinara and melted cheese, served with pasta.	image/Chicken_Parmesan_5khP5Gs.png	Breaded chicken breast topped with marinara and melted cheese, served with pasta.		6	14.50
98	Beef Stroganoff	beef-stroganoff	Tender beef in a creamy mushroom sauce, served over egg noodles.	Tender beef in a creamy mushroom sauce, served over egg noodles.	image/Beef_Stroganoff.png	Tender beef in a creamy mushroom sauce, served over egg noodles.		6	16.75
99	Vegetable Stir Fry	vegetable-stir-fry	A mix of fresh vegetables stir-fried in a savory sauce, served with rice.	A mix of fresh vegetables stir-fried in a savory sauce, served with rice.	image/Vegetable_Stir_Fry.png	A mix of fresh vegetables stir-fried in a savory sauce, served with rice.		6	13.00
100	Chocolate Lava Cake	chocolate-lava-cake	Warm, rich chocolate cake with a gooey center, served with vanilla ice cream.	Warm, rich chocolate cake with a gooey center, served with vanilla ice cream.	image/Chocolate_Lava_Cake.png	Warm, rich chocolate cake with a gooey center, served with vanilla ice cream.		7	7.00
101	Tiramisu	tiramisu	Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.	Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.	image/Tiramisu.png	Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.	POPULAR	7	6.50
102	New York Cheesecake	new-york-cheesecake	Creamy cheesecake with a graham cracker crust, served with berry compote.	Creamy cheesecake with a graham cracker crust, served with berry compote.	image/New_York_Cheesecake.png	Creamy cheesecake with a graham cracker crust, served with berry compote.		7	7.25
103	Apple Pie à la Mode	apple-pie-a-la-mode	Traditional apple pie served warm with a scoop of vanilla ice cream.	Traditional apple pie served warm with a scoop of vanilla ice cream.	image/Apple_Pie_à_la_Mode.png	Traditional apple pie served warm with a scoop of vanilla ice cream.		7	6.75
104	Freshly Brewed Coffee	freshly-brewed-coffee	Rich, aromatic coffee made from freshly ground beans.	Rich, aromatic coffee made from freshly ground beans.	image/Freshly_Brewed_Coffee.png	Rich, aromatic coffee made from freshly ground beans.		8	2.99
105	Iced Tea	iced-tea	Refreshing and cool, served sweetened or unsweetened.	Refreshing and cool, served sweetened or unsweetened.	image/Iced_Tea.png	Refreshing and cool, served sweetened or unsweetened.	POPULAR	8	2.50
133	Chicken Tenders	chicken-tenders	Breaded and fried chicken tenders, served with fries.	Breaded and fried chicken tenders, served with fries.	image/Chicken_Tenders.png	Breaded and fried chicken tenders, served with fries.		15	7.00
106	Fruit Smoothies	fruit-smoothies	A blend of seasonal fruits and yogurt. Choice of flavors.	A blend of seasonal fruits and yogurt. Choice of flavors.	image/Fruit_Smoothies_G4pMu3n.png	A blend of seasonal fruits and yogurt. Choice of flavors.		8	4.50
107	Italian Soda	italian-soda	Carbonated water with your choice of flavored syrup, topped with cream.	Carbonated water with your choice of flavored syrup, topped with cream.	image/Italian_Soda.png	Carbonated water with your choice of flavored syrup, topped with cream.		8	3.75
108	Shrimp Scampi	shrimp-scampi	Sautéed shrimp in a garlic lemon butter sauce, served over linguine.	Sautéed shrimp in a garlic lemon butter sauce, served over linguine.	image/Shrimp_Scampi.png	Sautéed shrimp in a garlic lemon butter sauce, served over linguine.		9	18.99
109	Grilled Tilapia	grilled-tilapia	Lightly seasoned tilapia fillet, grilled and served with a lemon butter sauce.	Lightly seasoned tilapia fillet, grilled and served with a lemon butter sauce.	image/grilled-tilapia.png	Lightly seasoned tilapia fillet, grilled and served with a lemon butter sauce.		9	16.50
110	Lobster Risotto	lobster-risotto	Creamy risotto with chunks of lobster and a touch of Parmesan.	Creamy risotto with chunks of lobster and a touch of Parmesan.	image/Lobster_Risotto.png	Creamy risotto with chunks of lobster and a touch of Parmesan.		9	22.00
111	Fish Tacos	fish-tacos	Grilled fish in soft tortillas with cabbage slaw and a creamy sauce.	Grilled fish in soft tortillas with cabbage slaw and a creamy sauce.	image/Fish_Tacos.png	Grilled fish in soft tortillas with cabbage slaw and a creamy sauce.		9	14.75
112	Spaghetti Carbonara	spaghetti-carbonara	Spaghetti tossed with crispy bacon, eggs, and Parmesan.	Spaghetti tossed with crispy bacon, eggs, and Parmesan.	image/Spaghetti_Carbonara.png	Spaghetti tossed with crispy bacon, eggs, and Parmesan.		10	13.99
113	Penne alla Vodka	penne-alla-vodka	Penne pasta in a creamy tomato vodka sauce.	Penne pasta in a creamy tomato vodka sauce.	image/Penne_alla_Vodka.png	Penne pasta in a creamy tomato vodka sauce.		10	12.50
114	Fettuccine Alfredo	fettuccine-alfredo	Fettuccine pasta in a rich and creamy Parmesan sauce.	Fettuccine pasta in a rich and creamy Parmesan sauce.	image/Fettuccine_Alfredo.png	Fettuccine pasta in a rich and creamy Parmesan sauce.	POPULAR	10	11.75
115	Lasagna Bolognese	lasagna-bolognese	Layers of pasta, Bolognese sauce, bechamel, and cheese.	Layers of pasta, Bolognese sauce, bechamel, and cheese.	image/Lasagna_Bolognese_i16r9o4.png	Layers of pasta, Bolognese sauce, bechamel, and cheese.		10	14.00
116	Classic Cheeseburger	classic-cheeseburger	Grilled beef patty with cheese, lettuce, tomato, and onion on a brioche bun.	Grilled beef patty with cheese, lettuce, tomato, and onion on a brioche bun.	image/Classic_Cheeseburger.png	Grilled beef patty with cheese, lettuce, tomato, and onion on a brioche bun.	POPULAR	11	10.99
117	Grilled Chicken Sandwich	grilled-chicken-sandwich	Marinated chicken breast with lettuce, tomato, and mayo on a ciabatta roll.	Marinated chicken breast with lettuce, tomato, and mayo on a ciabatta roll.	image/Grilled_Chicken_Sandwich.png	Marinated chicken breast with lettuce, tomato, and mayo on a ciabatta roll.		11	9.50
118	Veggie Burger	veggie-burger	A flavorful patty made from vegetables and grains, served with your choice of toppings.	A flavorful patty made from vegetables and grains, served with your choice of toppings.	image/Veggie_Burger_ZsPzwgR.png	A flavorful patty made from vegetables and grains, served with your choice of toppings.		11	9.75
119	BLT Sandwich	blt-sandwich	Crispy bacon, fresh lettuce, and tomato on toasted bread.	Crispy bacon, fresh lettuce, and tomato on toasted bread.	image/BLT_Sandwich.png	Crispy bacon, fresh lettuce, and tomato on toasted bread.		11	8.99
120	Margherita Pizza	margherita-pizza	Classic with fresh mozzarella, tomatoes, and basil.	Classic with fresh mozzarella, tomatoes, and basil.	image/margarita_68JxGJa.png	Classic with fresh mozzarella, tomatoes, and basil.	POPULAR	12	11.99
121	Pepperoni Pizza	pepperoni-pizza	Loaded with pepperoni and cheese on a crispy crust.	Loaded with pepperoni and cheese on a crispy crust.	image/Pepperoni_Pizza.png	Loaded with pepperoni and cheese on a crispy crust.	POPULAR	12	12.50
122	Veggie Pizza	veggie-pizza	Topped with a variety of fresh vegetables and mozzarella.	Topped with a variety of fresh vegetables and mozzarella.	image/Veggie_Pizza.png	Topped with a variety of fresh vegetables and mozzarella.		12	11.75
123	BBQ Chicken Pizza	bbq-chicken-pizza	Chicken, red onion, and mozzarella on a BBQ sauce base.	Chicken, red onion, and mozzarella on a BBQ sauce base.	image/BBQ_Chicken_Pizza.png	Chicken, red onion, and mozzarella on a BBQ sauce base.		12	13.00
124	Chicken Tikka Masala	chicken-tikka-masala	Grilled chicken in a creamy tomato sauce, served with basmati rice.	Grilled chicken in a creamy tomato sauce, served with basmati rice.	image/Chicken_Tikka_Masala.png	Grilled chicken in a creamy tomato sauce, served with basmati rice.		13	15.00
125	Beef Enchiladas	beef-enchiladas	Corn tortillas filled with seasoned beef, topped with enchilada sauce and cheese.	Corn tortillas filled with seasoned beef, topped with enchilada sauce and cheese.	image/Beef_Enchiladas.png	Corn tortillas filled with seasoned beef, topped with enchilada sauce and cheese.		13	14.50
126	Pad Thai	pad-thai	Stir-fried rice noodles with shrimp, peanuts, egg, and bean sprouts.	Stir-fried rice noodles with shrimp, peanuts, egg, and bean sprouts.	image/Pad_Thai.png	Stir-fried rice noodles with shrimp, peanuts, egg, and bean sprouts.	POPULAR	13	13.99
127	Sushi Platter	sushi-platter	Assortment of fresh sushi and sashimi.	Assortment of fresh sushi and sashimi.	image/Sushi_Platter.png	Assortment of fresh sushi and sashimi.		13	18.75
128	Vegan Burger	vegan-burger	Plant-baased patty with lettuce, tomato, and vegan mayo on a whole wheat bun.	Plant-baased patty with lettuce, tomato, and vegan mayo on a whole wheat bun.	image/Vegan_Burger_Eoi9vsJ.png	Plant-baased patty with lettuce, tomato, and vegan mayo on a whole wheat bun.		14	11.00
129	Quinoa Salad	quinoa-salad	Quinoa with mixed greens, vegetables, and a lemon-tahini dressing.	Quinoa with mixed greens, vegetables, and a lemon-tahini dressing.	image/Quinoa_Salad.png	Quinoa with mixed greens, vegetables, and a lemon-tahini dressing.		14	9.75
130	Stuffed Bell Peppers	stuffed-bell-peppers	Bell peppers filled with a mix of quinoa, black beans, corn, and spices.	Bell peppers filled with a mix of quinoa, black beans, corn, and spices.	image/Stuffed_Bell_Peppers.png	Bell peppers filled with a mix of quinoa, black beans, corn, and spices.		14	12.50
131	Vegan Pad Thai	vegan-pad-thai	Rice noodles with tofu, vegetables, and a tangy tamarind sauce.	Rice noodles with tofu, vegetables, and a tangy tamarind sauce.	image/Vegan_Pad_Thai.png	Rice noodles with tofu, vegetables, and a tangy tamarind sauce.		14	12.00
132	Macaroni and Cheese	macaroni-and-cheese	Creamy cheese sauce over elbow macaroni.	Creamy cheese sauce over elbow macaroni.	image/Macaroni_and_Cheese.png	Creamy cheese sauce over elbow macaroni.		15	6.50
134	Mini Cheeseburgers	mini-cheeseburgers	Two small burgers perfect for little hands, served with fries.	Two small burgers perfect for little hands, served with fries.	image/Mini_Cheeseburgers.png	Two small burgers perfect for little hands, served with fries.		15	7.50
135	Grilled Cheese Sandwich	grilled-cheese-sandwich	Classic grilled cheese on white bread, served with fries.	Classic grilled cheese on white bread, served with fries.	image/Grilled_Cheese_Sandwich.png	Classic grilled cheese on white bread, served with fries.		15	6.00
136	Grilled Chicken Salad	grilled-chicken-salad	Grilled chicken breast atop mixed greens with assorted vegetables.	Grilled chicken breast atop mixed greens with assorted vegetables.	image/Grilled_Chicken_Salad_1XCEa68.png	Grilled chicken breast atop mixed greens with assorted vegetables.		16	10.99
137	Baked Salmon	baked-salmon	Oven-baked salmon fillet with a side of steamed vegetables.	Oven-baked salmon fillet with a side of steamed vegetables.	image/Baked_Salmon.png	Oven-baked salmon fillet with a side of steamed vegetables.		16	16.75
138	Veggie Wrap	veggie-wrap	Whole wheat wrap filled with hummus, fresh vegetables, and sprouts.	Whole wheat wrap filled with hummus, fresh vegetables, and sprouts.	image/Veggie_Wrap.png	Whole wheat wrap filled with hummus, fresh vegetables, and sprouts.		16	8.99
139	Fruit Bowl	fruit-bowl	Seasonal fresh fruit served in a bowl.	Seasonal fresh fruit served in a bowl.	image/Fruit_Bowl.png	Seasonal fresh fruit served in a bowl.		16	6.50
140	Mojito	mojito	Classic cocktail with rum, mint, lime, sugar, and soda water.	Classic cocktail with rum, mint, lime, sugar, and soda water.	image/mojito.png	Classic cocktail with rum, mint, lime, sugar, and soda water.	POPULAR	17	8.00
141	Cosmopolitan	cosmopolitan	Vodka, triple sec, cranberry juice, and freshly squeezed lime.	Vodka, triple sec, cranberry juice, and freshly squeezed lime.	image/Cosmopolitan_gdBjl3O.png	Vodka, triple sec, cranberry juice, and freshly squeezed lime.		17	9.00
142	Old Fashioned	old-fashioned	Bourbon, bitters, sugar, and a twist of orange.	Bourbon, bitters, sugar, and a twist of orange.	image/Old_Fashioned.png	Bourbon, bitters, sugar, and a twist of orange.		17	10.00
143	Margarita	margarita	Tequila, triple sec, and lime juice, served on the rocks with salt.	Tequila, triple sec, and lime juice, served on the rocks with salt.	image/margarita.png	Tequila, triple sec, and lime juice, served on the rocks with salt.	POPULAR	17	9.50
\.


--
-- Data for Name: _blog_api_category; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._blog_api_category (id, name, image) FROM stdin;
3	Appetizers	image/Bruschetta_Classico_58juut6.png
4	Soups	image/Tomato_Basil_Soup_HNbeIsh.png
5	Salads	image/Greek_Salad_32ylA5B.png
6	Main Courses	image/Beef_Stroganoff_3Qu7PDa.png
7	Desserts	image/Chocolate_Lava_Cake_FXgis5A.png
8	Beverages	image/mojito_0bxLmjk.png
9	Seafood	image/Shrimp_Scampi_mVutJgl.png
10	Pasta	image/Fettuccine_Alfredo_9pwl5Pe.png
11	Burgers & Sandwiches	image/Vegan_Burger_prEIWnH.png
12	Pizzas	image/margarita_dEIGp5G.png
13	International Cuisine	image/International_Cuisine.png
14	Vegan Options	image/Vegan_Options.png
15	Kids' Menu	image/kids_menu.png
16	Healthy Choices	image/Healthy_Choices.png
17	Signature Cocktails	image/Signature_Cocktails.png
\.


--
-- Data for Name: _django_admin_log; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._django_admin_log (id, action_time, object_id, object_repr, change_message, content_type_id, user_id, action_flag) FROM stdin;
1	2022-10-09	1	test	[{"added": {}}]	7	1	1
2	2022-10-09	1	123	[{"added": {}}]	8	1	1
3	2022-10-09	1	123	[{"changed": {"fields": ["Image"]}}]	8	1	2
4	2023-11-16	1	test		7	2	3
5	2023-11-16	2	alco	[{"added": {}}]	7	2	1
6	2023-11-16	72	Margarita		8	2	3
7	2023-11-16	71	Old Fashioned		8	2	3
8	2023-11-16	70	Cosmopolitan		8	2	3
9	2023-11-16	69	Mojito		8	2	3
10	2023-11-16	68	Fruit Bowl		8	2	3
11	2023-11-16	67	Veggie Wrap		8	2	3
12	2023-11-16	66	Baked Salmon		8	2	3
13	2023-11-16	65	Grilled Chicken Salad		8	2	3
14	2023-11-16	64	Grilled Cheese Sandwich		8	2	3
15	2023-11-16	63	Mini Cheeseburgers		8	2	3
16	2023-11-16	62	Chicken Tenders		8	2	3
17	2023-11-16	61	Macaroni and Cheese		8	2	3
18	2023-11-16	60	Vegan Pad Thai		8	2	3
19	2023-11-16	59	Stuffed Bell Peppers		8	2	3
20	2023-11-16	58	Quinoa Salad		8	2	3
21	2023-11-16	57	Vegan Burger		8	2	3
22	2023-11-16	56	Sushi Platter		8	2	3
23	2023-11-16	55	Pad Thai		8	2	3
24	2023-11-16	54	Beef Enchiladas		8	2	3
25	2023-11-16	53	Chicken Tikka Masala		8	2	3
26	2023-11-16	52	BBQ Chicken Pizza		8	2	3
27	2023-11-16	51	Veggie Pizza		8	2	3
28	2023-11-16	50	Pepperoni Pizza		8	2	3
29	2023-11-16	49	Margherita Pizza		8	2	3
30	2023-11-16	48	BLT Sandwich		8	2	3
31	2023-11-16	47	Veggie Burger		8	2	3
32	2023-11-16	46	Grilled Chicken Sandwich		8	2	3
33	2023-11-16	45	Classic Cheeseburger		8	2	3
34	2023-11-16	44	Lasagna Bolognese		8	2	3
35	2023-11-16	43	Fettuccine Alfredo		8	2	3
36	2023-11-16	42	Penne alla Vodka		8	2	3
37	2023-11-16	41	Spaghetti Carbonara		8	2	3
38	2023-11-16	40	Fish Tacos		8	2	3
39	2023-11-16	39	Lobster Risotto		8	2	3
40	2023-11-16	38	Grilled Tilapia		8	2	3
41	2023-11-16	37	Shrimp Scampi		8	2	3
42	2023-11-16	36	Italian Soda		8	2	3
43	2023-11-16	35	Fruit Smoothies		8	2	3
44	2023-11-16	34	Iced Tea		8	2	3
45	2023-11-16	33	Freshly Brewed Coffee		8	2	3
46	2023-11-16	32	Apple Pie à la Mode		8	2	3
47	2023-11-16	31	New York Cheesecake		8	2	3
48	2023-11-16	30	Tiramisu		8	2	3
49	2023-11-16	29	Chocolate Lava Cake		8	2	3
50	2023-11-16	28	Vegetable Stir Fry		8	2	3
51	2023-11-16	27	Beef Stroganoff		8	2	3
52	2023-11-16	26	Chicken Parmesan		8	2	3
53	2023-11-16	25	Grilled Salmon		8	2	3
54	2023-11-16	24	Spinach & Strawberry Salad		8	2	3
55	2023-11-16	23	Garden Salad		8	2	3
56	2023-11-16	22	Greek Salad		8	2	3
57	2023-11-16	21	Caesar Salad		8	2	3
58	2023-11-16	20	Tomato Basil Soup		8	2	3
59	2023-11-16	19	Minestrone		8	2	3
60	2023-11-16	18	Cream of Mushroom		8	2	3
61	2023-11-16	17	Chicken Noodle Soup		8	2	3
62	2023-11-16	16	Caprese Salad		8	2	3
63	2023-11-16	15	Stuffed Mushrooms		8	2	3
64	2023-11-16	14	Crispy Calamari		8	2	3
65	2023-11-16	13	Bruschetta Classico		8	2	3
66	2023-11-16	12	Garden Salad		8	2	3
67	2023-11-16	11	Greek Salad		8	2	3
68	2023-11-16	10	Caesar Salad		8	2	3
69	2023-11-16	9	Tomato Basil Soup		8	2	3
70	2023-11-16	8	Minestrone		8	2	3
71	2023-11-16	7	Cream of Mushroom		8	2	3
72	2023-11-16	6	Chicken Noodle Soup		8	2	3
73	2023-11-16	5	Caprese Salad		8	2	3
74	2023-11-16	4	Stuffed Mushrooms		8	2	3
75	2023-11-16	3	Crispy Calamari		8	2	3
76	2023-11-16	2	Bruschetta Classico		8	2	3
77	2023-11-16	143	Margarita	[{"changed": {"fields": ["Image"]}}]	8	2	2
78	2023-11-16	142	Old Fashioned	[{"changed": {"fields": ["Image"]}}]	8	2	2
79	2023-11-16	141	Cosmopolitan	[{"changed": {"fields": ["Image"]}}]	8	2	2
80	2023-11-16	140	Mojito	[{"changed": {"fields": ["Image"]}}]	8	2	2
81	2023-11-16	139	Fruit Bowl	[{"changed": {"fields": ["Image"]}}]	8	2	2
82	2023-11-16	138	Veggie Wrap	[{"changed": {"fields": ["Image"]}}]	8	2	2
83	2023-11-16	137	Baked Salmon	[{"changed": {"fields": ["Image"]}}]	8	2	2
84	2023-11-16	136	Grilled Chicken Salad	[{"changed": {"fields": ["Image"]}}]	8	2	2
85	2023-11-16	136	Grilled Chicken Salad	[{"changed": {"fields": ["Image"]}}]	8	2	2
86	2023-11-16	135	Grilled Cheese Sandwich	[{"changed": {"fields": ["Image"]}}]	8	2	2
87	2023-11-16	134	Mini Cheeseburgers	[{"changed": {"fields": ["Image"]}}]	8	2	2
88	2023-11-16	133	Chicken Tenders	[{"changed": {"fields": ["Image"]}}]	8	2	2
89	2023-11-16	132	Macaroni and Cheese	[{"changed": {"fields": ["Image"]}}]	8	2	2
90	2023-11-16	131	Vegan Pad Thai	[{"changed": {"fields": ["Image"]}}]	8	2	2
91	2023-11-16	130	Stuffed Bell Peppers	[{"changed": {"fields": ["Image"]}}]	8	2	2
92	2023-11-16	129	Quinoa Salad	[{"changed": {"fields": ["Image"]}}]	8	2	2
93	2023-11-16	128	Vegan Burger	[{"changed": {"fields": ["Image"]}}]	8	2	2
94	2023-11-16	127	Sushi Platter	[{"changed": {"fields": ["Image"]}}]	8	2	2
95	2023-11-16	126	Pad Thai	[{"changed": {"fields": ["Image"]}}]	8	2	2
96	2023-11-16	125	Beef Enchiladas	[{"changed": {"fields": ["Image"]}}]	8	2	2
97	2023-11-16	124	Chicken Tikka Masala	[{"changed": {"fields": ["Image"]}}]	8	2	2
98	2023-11-16	123	BBQ Chicken Pizza	[{"changed": {"fields": ["Image"]}}]	8	2	2
99	2023-11-16	122	Veggie Pizza	[{"changed": {"fields": ["Image"]}}]	8	2	2
100	2023-11-16	121	Pepperoni Pizza	[]	8	2	2
\.


--
-- Data for Name: _django_content_type; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
3	auth	group
2	auth	permission
4	auth	user
8	blog_api	blog
7	blog_api	category
5	contenttypes	contenttype
6	sessions	session
\.


--
-- Data for Name: _django_migrations; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2022-10-09
2	auth	0001_initial	2022-10-09
3	admin	0001_initial	2022-10-09
4	admin	0002_logentry_remove_auto_add	2022-10-09
5	admin	0003_logentry_add_action_flag_choices	2022-10-09
6	contenttypes	0002_remove_content_type_name	2022-10-09
7	auth	0002_alter_permission_name_max_length	2022-10-09
8	auth	0003_alter_user_email_max_length	2022-10-09
9	auth	0004_alter_user_username_opts	2022-10-09
10	auth	0005_alter_user_last_login_null	2022-10-09
11	auth	0006_require_contenttypes_0002	2022-10-09
12	auth	0007_alter_validators_add_error_messages	2022-10-09
13	auth	0008_alter_user_username_max_length	2022-10-09
14	auth	0009_alter_user_last_name_max_length	2022-10-09
15	auth	0010_alter_group_name_max_length	2022-10-09
16	auth	0011_update_proxy_permissions	2022-10-09
17	auth	0012_alter_user_first_name_max_length	2022-10-09
18	blog_api	0001_initial	2022-10-09
19	blog_api	0002_category_image	2022-10-09
20	sessions	0001_initial	2022-10-09
21	blog_api	0003_remove_blog_contenttwo	2023-11-16
22	blog_api	0004_blog_price	2023-11-16
\.


--
-- Data for Name: _django_session; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._django_session (session_key, session_data, expire_date) FROM stdin;
dwmu050u62x4s3c29qdomkh2iquvw0gp	.eJxVjDsOwjAQBe_iGlnxd72U9JzBWq9tHECJFCcV4u4QKQW0b2beS0Ta1ha3XpY4ZnEWSpx-t0T8KNMO8p2m2yx5ntZlTHJX5EG7vM65PC-H-3fQqLdvzeQTmoGdAjYqJ6zOIVjwuloH4MCwN2Fg1FitJx80QQhIGAgtJRLvD8P4Nws:1ohSYJ:tYZnG-GiR2V7Pi5E6qPq60TCi0t80nvIJYduXT4bxDs	2022-10-23
nrobich672kia2sbh6wh0hh42ay5n2d6	.eJxVjEEOwiAQRe_C2hCmIyAu3fcMhGFAqgaS0q6Md7dNutDtf-_9t_BhXYpfe5r9xOIqBnH63SjEZ6o74Eeo9yZjq8s8kdwVedAux8bpdTvcv4MSetlqZIfauqSRdCAAB2cNCbLTbGJWqNhisHABNWA0RjHxpiSVbSZyjOLzBcSFN2s:1r3aye:7noPGgTpueVp1fH3Nj5f89jlX33y9dzWZ8FTbLGJ34U	2023-11-30
\.


--
-- Data for Name: _sqlite_sequence; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._sqlite_sequence (name, seq) FROM stdin;
django_migrations	22
django_admin_log	189
django_content_type	8
auth_permission	32
auth_group	0
auth_user	2
blog_api_category	17
blog_api_blog	143
\.


--
-- PostgreSQL database dump complete
--

