-- Find the item that has minimum weight
SELECT MIN(WEIGHT) FROM ITEMS;

-- Find the different warehouses in “Pune”.
SELECT DISTINCT(WNAME) FROM WAREHOUSES W JOIN CITIES C ON W.CITY_ID = C.CID WHERE C.CITY = 'PUNE'; 

-- Find the details of items ordered by a customer “Mr. Patil”
SELECT * 
FROM 
ITEMORDERS JOIN CUSTOMER ON CUSTOMER.CNO = ITEMORDERS.CUSTOMERID
JOIN ITEMS ON  ITEMORDERS.ITEMID = ITEMS.ITEMNO
WHERE CUSTOMER.CNAME = 'Mr. Patil';

-- Find a Warehouse which has maximum stores
SELECT COUNT(SID) AS STR FROM STORES 
GROUP BY WAREHOUSE_ID 
ORDER BY STR DESC
LIMIT 1;

-- Find the detailed orders given by each customer.
SELECT * FROM ORDERS JOIN CUSTOMER 
ON ORDERS.CID =  CUSTOMER.CNO;