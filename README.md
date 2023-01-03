I connected the backend from project 2 with the front in project 3
- first run install
- To run the front and back end in the same time use npm run RunAll

Port number for server:3000
Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/

to login use :
UserName:User1
password:123


Port number for db :127.0.0.1

Port number for server:3000

Environment variables:
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=shopping
POSTGRES_USER=shopping_user
POSTGRES_PASSWORD=password123
SALT_ROUNDS=10
TOKEN_SECRET=AA123!

Package installation instructions:

connect to the default postgres database as the server's root user `psql -U postgres
In psql run the following to create a user
CREATE USER shopping_user WITH PASSWORD 'password123';`
In psql run the following to create the dev and test database
CREATE DATABASE shopping;`
`CREATE DATABASE shopping_test;`
Connect to the databases and grant all privileges
Grant for dev database
`\c shopping`
GRANT ALL PRIVILEGES ON DATABASE shopping TO shopping_user;` Grant for test database
`\c shopping_test`
`GRANT ALL PRIVILEGES ON DATABASE shopping_test TO shopping_user;` 

Setup db and server instructions:
open psql: psql -U postgres
create a new database: create database shopping 
 operations:
 db-migrate up --> create table 
 db-migrate down --> drop table 


Endpoints:
GET /users -->view all users
GET/user -->show user
Post/user -->create user
GET/products --> show all products 
GET/product --> show prouduct 
post/product --> create prouduct 
GET/orders --> show all orders 
GET/order --> show order
GET/orderComplete --> show complete order 


 
I created 5 Test 

For start server use : npm run start 
For start test user : npm test



