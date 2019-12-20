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