CREATE DATABASE library;

USE library;

CREATE TABLE books (
  book_id INTEGER PRIMARY KEY,
  title VARCHAR(100),
  author_id INTEGER,
  publisher VARCHAR(50),
  publish_date DATE,
  quantity INTEGER,
  FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

CREATE TABLE authors (
  author_id INTEGER PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100)
);

CREATE TABLE users (
  user_id INTEGER PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  password VARCHAR(50)
);

CREATE TABLE borrowed_books (
  id INTEGER PRIMARY KEY,
  book_id INTEGER,
  user_id INTEGER,
  borrowed_date DATE,
  due_date DATE,
  returned_date DATE,
  FOREIGN KEY (book_id) REFERENCES books(book_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
