CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
  select distinct Salary
  from Employee
  order by Salary desc
  limit N);
END