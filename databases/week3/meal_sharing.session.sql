
CREATE DATABASE meal_sharing
    DEFAULT CHARACTER SET = 'utf8mb4';
USE meal_sharing;


-- Active: 1724098283689@@127.0.0.1@3306@meal_sharing
CREATE TABLE Meal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    `when` DATETIME,  
    max_reservations INT,
    price DECIMAL(10, 2),
    created_date DATE
);


CREATE TABLE Reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    number_of_guests INT,
    meal_id INT,
    created_date DATE,
    contact_phonenumber VARCHAR(255),  
    contact_name VARCHAR(255),
    contact_email VARCHAR(255) UNIQUE,  
    FOREIGN KEY (meal_id) REFERENCES Meal(id) ON DELETE SET NULL 
);



CREATE TABLE Review (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    meal_id INT,
    stars INT,  
    FOREIGN KEY (meal_id) REFERENCES Meal(id) ON DELETE SET NULL 
);

ALTER TABLE Review
ADD created_date DATE DEFAULT (CURRENT_DATE);


INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES 
    ('Italian Dinner', 'Delicious Italian cuisine', 'Restaurant A', '2024-06-20 19:00:00', 20, 50.00, '2024-06-10'),
    ('Mexican Fiesta', 'Authentic Mexican dishes', 'Mexican Night', '2024-06-25 18:30:00', 15, 40.00, '2024-06-23'),
    ('Family Brunch', 'Weekend brunch menu', 'Cafe C', '2024-06-21 11:00:00', 30, 25.00, '2024-06-18'),
    ('French Cuisine Night', 'Exquisite French dishes', 'Bistro D', '2024-06-23 20:00:00', 25, 65.00, '2024-06-22'),
    ('Sushi Extravaganza', 'Fresh sushi and sashimi', 'Tokyo Sushi', '2024-06-27 19:30:00', 18, 55.00, '2024-06-27'),
    ('BBQ Feast', 'All-you-can-eat BBQ', 'Park F', '2024-06-28 17:00:00', 40, 30.00, '2024-06-30');

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (3, 1, CURDATE(), '123-456-7890', 'John Smith', 'john.smith@example.com');


INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES 
    ('Fantastic BBQ Experience', 'Great selection and flavors!', 3, 4, '2024-06-29'),
    ('Lovely French Dinner', 'Perfect ambiance and delicious food.', 4, 5, '2024-06-24'),
    ('Sushi Heaven', 'Freshness at its best.', 5, 5, '2024-06-28'),
    ('Great Italian Dinner', 'Amazing food and service!', 1, 5, '2024-06-21'),
    ('Fun Mexican Night', 'Loved the atmosphere and food.', 2, 4, '2024-06-26'),
    ('Disappointing Experience', 'The food was cold and the service was slow. Not worth the price.', 6, 2, '2024-06-30');

SELECT * FROM Meal WHERE title LIKE '%Sushi%';

SELECT Meal.title, ROUND(AVG(Review.stars), 2) AS avg_stars 
FROM Meal
JOIN Review ON Meal.id = Review.meal_id
GROUP BY meal_id HAVING avg_stars >= 4;

SELECT Meal.title AS meal_title, Reservation.* 
FROM Reservation 
JOIN Meal ON Reservation.meal_id = Meal.id 
WHERE Meal.title LIKE '%Italian%' 
ORDER BY Reservation.created_date;

SELECT COALESCE(ROUND(AVG(Review.stars), 2), NULL) AS avg_stars, Meal.title
FROM Meal LEFT JOIN Review ON Meal.id = Review.meal_id
GROUP BY Meal.id, Meal.title
ORDER BY avg_stars DESC;

