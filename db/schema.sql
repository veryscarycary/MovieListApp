CREATE DATABASE cinema;

USE cinema;

CREATE TABLE movies (
	id int NOT NULL AUTO_INCREMENT,
	title varchar(30),
	director varchar(30),
	year int,
	PRIMARY KEY (id)
);

CREATE TABLE directors (
	id int NOT NULL AUTO_INCREMENT,
	team varchar(30),
	PRIMARY KEY (id)
);