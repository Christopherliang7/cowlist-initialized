DROP DATABASE cowslist;
CREATE DATABASE cowslist;

USE cowslist;

CREATE TABLE cows (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cow_name VARCHAR(50) NOT NULL,
  cow_description VARCHAR(100) NOT NULL
);

INSERT INTO `cows` (`id`, `cow_name`, `cow_description`) VALUES
(1, 'Chris', 'Fat');