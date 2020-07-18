SELECT DISTINCT(city) 
FROM station 
WHERE city 
LIKE 'A%' 
OR city 
LIKE 'E%' 
OR city  
LIKE 'I%' 
OR city
LIKE 'O%' 
OR city
LIKE 'U%';

-- not sure why this does not pass test cases
-- SELECT DISTINCT(city) FROM station WHERE city LIKE '[AEIOU]%';