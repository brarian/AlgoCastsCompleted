--aggregate functions 1 
USE sql_invoicing;
  SELECT
    'First half' AS date_range,
    SUM(invoice_total) AS total_sales,
    SUM(payment_total) AS total_payments,
    SUM(invoice_total - payment_total) AS what_we_expect
  FROM invoices
  WHERE invoice_date 
	BETWEEN '2019-01-01' AND '2019-06-30'
UNION
  SELECT
    'First half' AS date_range,
    SUM(invoice_total) AS total_sales,
    SUM(payment_total) AS total_payments,
    SUM(invoice_total - payment_total) AS what_we_expect
  FROM invoices
  WHERE invoice_date 
	BETWEEN '2019-07-01' AND '2019-12-31'
UNION
  SELECT
    'Total' AS date_range,
    SUM(invoice_total) AS total_sales,
    SUM(payment_total) AS total_payments,
    SUM(invoice_total - payment_total) AS what_we_expect
  FROM invoices
  WHERE invoice_date 
	BETWEEN '2019-01-01' AND '2019-12-31';

-- GROUP BY 2 

USE sql_invoicing;
SELECT
  date,
  SUM(amount) AS total,
  pm.name AS payment_method
FROM payments p
  JOIN payment_methods pm
  ON p.payment_method = pm.payment_method_id
GROUp BY date, payment_method
ORDER BY date;

--HAHVING
USE sql_store;
SELECT
  first_name,
  state,
  COUNT(customer_id),
  SUM(quantity*unit_price) AS total
FROM customers
  JOIN orders USING (customer_id)
  JOIN order_items USING (order_id)  
GROUP BY customer_id
HAVING state='VA';

SELECT
  c.customer_id,
  c.first_name,
  c.last_name,
  SUM(oi.quantity * oi.unit_price) AS total_sales
FROM customers c
  JOIN orders o       USING (customer_id)
  JOIN order_items oi       USING (order_id)
WHERE state='VA'
GROuP BY c.customer_id, 
c.first_name, 
c.last_name
HAVING total_sales > 100;

-- Subquery 2
SELECT
  first_name,
  salary
from employees
WHERE salary > (
	SELECT AVG(salary)
FROM employees
);

-- Subquery vs JOIN
SELECT DISTINCT
  first_name,
  last_name,
  customer_id
FROM orders o
  JOIN customers c     USING (customer_id)
  JOIN order_items oi     USING (order_id)
WHERE product_id = 3


SELECT order_id, product_id
from order_items
WHERE product_id = 3;
SELECT *
FROM customers
where customer_id IN (
	SELECT o.customer_id
from order_items oi
  JOIN orders o     USING (order_id)
WHERE product_id = 3
)

-- correlated subquery

SELECT *
FROM invoices i
WHERE i.invoice_total > (
	SELECT
  AVG(invoice_total)
FROM invoices
Where client_id = i.client_id
GROUP BY client_id
)


USE sql_store;
SELECT *
FROM products p
WHERE  NOT EXISTS (
	SELECT product_id
FROM order_items
WHERE product_id = p.product_id
)