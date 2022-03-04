DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30)
);

CREATE table role (
    id int PRIMARY key AUTO_INCREMENT,
    title VARCHAR(30),
    salary decimal,
    department_id int,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE table employee (
    id int primary key AUTO_INCREMENT,
    first_name varchar(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN key (role_id) REFERENCES role(id),
    FOREIGN key (manager_id) REFERENCES employee(id)
);
