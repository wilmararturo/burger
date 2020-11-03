-- CREATE database
-- DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE bugers_db;
USE burgers_db;
-- CREATE tables
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY(id)
);