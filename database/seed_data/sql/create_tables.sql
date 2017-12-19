CREATE TABLE users(
	id INTEGER NOT NULL,
	username VARCHAR(10),
	password VARCHAR(10),
	apikey CHAR(36),
	isadmin BIT
);

CREATE TABLE widgets(
	id INTEGER NOT NULL,
	name VARCHAR(20),
	price DOUBLE
);

CREATE TABLE orders(
	id INTEGER NOT NULL,
	userID INTEGER NOT NULL
);

CREATE TABLE orderItems(
	id INTEGER NOT NULL,
	orderID INTEGER NOT NULL,
	widgetID INTEGER NOT NULL,
	quantity INTEGER
);

