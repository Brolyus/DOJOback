DROP DATABASE IF EXISTS christmas_list;
CREATE DATABASE christmas_list;
USE christmas_list;
CREATE TABLE child
(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(100),
  lastname VARCHAR(100),
  kindness INT
);
CREATE TABLE gift
(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(150),
  child_id INT,
  FOREIGN KEY (child_id) REFERENCES child(id)
);
