USE nnn;

SHOW TABLES;

-- 1. Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.*
FROM task
    JOIN user ON task.user_id = user.id
WHERE
    user.email LIKE '%@spotify.com';

-- 2. Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.*
FROM task
    JOIN user ON task.user_id = user.id
    JOIN status ON task.status_id = status.id
WHERE
    user.name = 'Donald Duck'
    AND status.name = 'Not started';

-- 3. Get all the tasks for 'Maryrose Meadows' that were created in September
SELECT task.*
FROM task
    JOIN user ON task.user_id = user.id
WHERE
    user.name = 'Maryrose Meadows'
    AND MONTH(task.created) = 9;

-- 4. Find how many tasks were created in each month
SELECT MONTH(created) AS month, COUNT(*) AS task_count
FROM task
GROUP BY
    MONTH(created);