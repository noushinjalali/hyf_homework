--1. create a  database for the school
CREATE DATABASE school_db;

USE school_db;

--2. Create the class Table
CREATE TABLE class (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NOT NULL
);

--3. Create the student table
CREATE Table student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255),
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES class (id)
);

---------------
SHOW DATABASES

USE school_db
---------------

DROP DATABASE IF EXISTS school_db;

CREATE DATABASE school_db;

USE school_db
-- Create the class table
CREATE TABLE class (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NOT NULL
);

-- Create the student table
CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255),
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES class (id)
);

SHOW TABLES
-- Insert sample data into the class table
INSERT INTO
    class (name, begins, ends)
VALUES (
        'Math 101',
        '2024-09-01',
        '2024-12-15'
    ),
    (
        'History 101',
        '2024-09-01',
        '2024-12-15'
    );

-- Insert sample data into the student table
INSERT INTO
    student (name, email, phone, class_id)
VALUES (
        'John Doe',
        'john.doe@example.com',
        '123-456-7890',
        1
    ),
    (
        'Jane Smith',
        'jane.smith@example.com',
        '098-765-4321',
        2
    );

SELECT * FROM class;

SELECT * FROM student;

-- Create an index on the name column of the STUDENT table
CREATE INDEX idx_student_name ON student (name);

-- Add a new column named status to the CLASS table-- Add a new column to the class table named status
ALTER TABLE class
ADD COLUMN status ENUM(
    'not-started',
    'ongoing',
    'finished'
) NOT NULL DEFAULT 'not-started';

-- verify that the index has been created
SHOW INDEX FROM student;

-- verify that new column has been added
DESCRIBE class;