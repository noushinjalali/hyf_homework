--0:
DESCRIBE task;
-- to see all columns and their name.

SELECT *
from task;

--1: 
SELECT COUNT(*) AS 'Total tasks' 
FROM task;
 

--2: 
SELECT COUNT(*) AS 'Tasks Without Valid Due Date' 
FROM task
WHERE due_date IS NULL;


--3: 
SELECT *
FROM task 
WHERE status_id = 'done';

--4: 
SELECT *
FROM task
WHERE status_id <> 'done';


--5: 
SELECT *
FROM task 
ORDER BY created DESC;

--6: 
SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;

--7:
SELECT title, due_date
FROM task
WHERE title LIKE '%database%' OR description LIKE '%database%';

--8:
SELECT title, status_id 
FROM task;

--9:
SELECT status_id, COUNT(*) AS 'task count'
FROM task
GROUP BY status_id;

--10:
SELECT status_id, COUNT(*) AS 'task count'
FROM task
GROUP BY status_id
ORDER BY 'task count' DESC;
