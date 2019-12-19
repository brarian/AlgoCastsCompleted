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