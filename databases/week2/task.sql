--1. Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO
    task (
        title,
        description,
        created,
        updated,
        due_date,
        status_id,
        user_id
    )
VALUES (
        'Read SQL Tutorial',
        'Read and practice the SQL tutorial on W3Schools.',
        NOW(),
        NOW(),
        '2023-12-31',
        1,
        1
    );

--2. Change the title of a taskUPDATE taskUPDATE task
UPDATE task SET title = 'Wash and Iron Clothes' WHERE id = 1;

--3. Change a task due date
UPDATE task SET due_date = '2024-01-31' WHERE id = 2;

--4. Change a task status
UPDATE task SET status_id = 2 WHERE id = 3;

--5. Mark a task as complete
UPDATE task SET status_id = 3 WHERE id = 4;

--6. Delete a task
DELETE FROM task WHERE id = 5;

--check the result of changes
SELECT * FROM task;

SELECT t.id, t.title, s.name AS status_name, t.due_date
FROM task t
    JOIN status s ON t.status_id = s.id;