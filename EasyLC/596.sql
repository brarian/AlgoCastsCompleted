SELECT class
FROM (
SELECT class, Count(Distinct student) as Num
  FROM courses
  GROUP BY class
    ) as Temp
WHERE Num >= 5 