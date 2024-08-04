CREATE DATABASE meal_sharing;
USE meal_sharing;

CREATE TABLE Meal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    meal_datetime DATETIME,
    max_reservations INT,
    price DECIMAL(10,2),
    created_date DATE DEFAULT (CURRENT_DATE)
);

CREATE TABLE Reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    number_of_guests INT,
    meal_id INT,
    created_date DATE DEFAULT (CURRENT_DATE),
    contact_phone_number VARCHAR(255),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    FOREIGN KEY (meal_id) REFERENCES Meal(id)
);

CREATE TABLE Review (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    meal_id INT,
    stars INT CHECK (stars >= 1 AND stars <= 5),
    created_date DATE DEFAULT (CURRENT_DATE),
    FOREIGN KEY (meal_id) REFERENCES Meal(id)
);

SHOW DATABASES;
USE meal_sharing;
SHOW TABLES;
DESCRIBE Meal;


-- Inserting into Meal Table
INSERT INTO Meal (title, description, location, meal_datetime, max_reservations, price, created_date)
VALUES ('Pasta Night', 'Delicious homemade pasta', 'Copenhagen', '2024-08-15 19:00:00', 10, 50.00, CURDATE());

-- Inserting into Reservation Table
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phone_number, contact_name, contact_email)
VALUES (2, 1, CURDATE(), '12345678', 'John Doe', 'john@example.com');

-- Inserting into Review Table
INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ('Great meal', 'Really enjoyed the food!', 1, 5, CURDATE());

-- Queries

-- Get all meals
SELECT * FROM Meal;

-- Add a new meal
INSERT INTO Meal (title, description, location, meal_datetime, max_reservations, price, created_date)
VALUES ('New Meal', 'Description for new meal', 'Location', '2024-09-01 18:00:00', 15, 75.00, CURDATE());

-- Get a meal with a specific id
SELECT * FROM Meal WHERE id = 1;

-- Update a meal with a specific id
UPDATE Meal 
SET title = 'Updated Meal Title', price = 75.00
WHERE id = 1;

-- Delete a meal with a specific id
DELETE FROM Meal WHERE id = 1;

-- Get all reservations
SELECT * FROM Reservation;

-- Add a new reservation
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phone_number, contact_name, contact_email)
VALUES (3, 1, CURDATE(), '98765432', 'Jane Doe', 'jane@example.com');

-- Get a reservation with a specific id
SELECT * FROM Reservation WHERE id = 1;

-- Update a reservation with a specific id
UPDATE Reservation 
SET number_of_guests = 3
WHERE id = 1;

-- Delete a reservation with a specific id
DELETE FROM Reservation WHERE id = 1;

-- Get all reviews
SELECT * FROM Review;

-- Add a new review
INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ('Another Great Meal', 'Loved it!', 1, 4, CURDATE());

-- Get a review with a specific id
SELECT * FROM Review WHERE id = 1;

-- Update a review with a specific id
UPDATE Review 
SET stars = 4
WHERE id = 1;

-- Delete a review with a specific id
DELETE FROM Review WHERE id = 1;

-- Additional Functionality Queries

-- Get meals that has a price smaller than a specific price
SELECT * FROM Meal WHERE price < 90;

-- Get meals that still has available reservations
SELECT * FROM Meal WHERE max_reservations > (SELECT COUNT(*) FROM Reservation WHERE Meal.id = Reservation.meal_id);

-- Get meals that partially match a title
SELECT * FROM Meal WHERE title LIKE '%Rød grød med%';

-- Get meals created between two dates
SELECT * FROM Meal WHERE created_date BETWEEN '2024-07-01' AND '2024-07-31';

-- Get only specific number of meals
SELECT * FROM Meal LIMIT 5;

-- Get the meals that have good reviews
SELECT * FROM Meal 
WHERE id IN (SELECT meal_id FROM Review WHERE stars >= 4);

-- Get reservations for a specific meal sorted by created_date
SELECT * FROM Reservation WHERE meal_id = 1 ORDER BY created_date;

-- Sort all meals by average number of stars in the reviews
SELECT Meal.*, AVG(Review.stars) as average_stars
FROM Meal
JOIN Review ON Meal.id = Review.meal_id
GROUP BY Meal.id
ORDER BY average_stars DESC;