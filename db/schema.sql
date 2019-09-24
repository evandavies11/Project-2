DROP DATABASE IF EXISTS books;

CREATE DATABASE books_db;

USE books_db;

CREATE TABLE books (

id INT(100) NOT NULL,
title VARCHAR(100) NOT NULL,
name_of_borrower VARCHAR(100) NOT NULL,
date_borrowed 	DATE NOT NULL,
due_date DATE NOT NULL,
PRIMARY KEY (id)
 );
 
 