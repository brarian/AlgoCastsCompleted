-- //6. Write a SQL statement to display either those orders
-- // which are not issued on date 2012-09-10 and issued by the
-- // salesman whose ID is 505 and below or those orders which purchase
-- // amount is 1000.00 and below

SELECT *
FROM orders
WHERE NOT (ord_date = '2012-09-10 ' AND salesman_id=505)
  OR purch_amt < 1000.00

-- 7.Write a SQL statement to display salesman_id, name, city and commission 
-- who gets the commission within the range more than 0.10% and less than 0.12%.  
SELECT *
FROM salesman
WHERE commission BETWEEN '.10' AND '.12';


-- 8. Write a SQL query to display all orders where purchase amount less than 200 
-- or exclude those orders which order date is on or greater than 10th Feb,2012 
-- and customer id is below 3009. Go to the editor
SELECT *
FROM orders
WHERE (purch_amt < 200 OR NOT ord_date < '2012-02-10' AND customer_id < 3009)

-- 9. Write a SQL statement to exclude the rows which satisfy 1)
-- order dates are 2012-08-17 and purchase amount is below 1000 2) 
-- customer id is greater than 3005 and purchase amount is below 1000.  
SELECT *
FROM orders
WHERE NOT 
((ord_date='2012-08-17' AND purch_amt < 1000) AND
  customer_id > 3005)

-- 11. Write a query in SQL to find the data of employees whose last name is Dosni or Mardy.  
SELECT
  *
FROM emp_details
WHERE EMP_LNAME= 'Dosni' OR EMP_LNAME='Mardy'


-- 12. Write a query in SQL to display all the data of employees that work 
-- in department 47 or department 63. 

SELECT
  *
FROM emp_details
WHERE EMP_DEPT = 47 OR EMP_DEPT =63

-- sql invoicing 
-- invoices - number // client id 
-- create copy of invoices and put it in a new table called invoices archived
-- in that table. we want client name instead of client id 
-- copy only invoice that have payment 