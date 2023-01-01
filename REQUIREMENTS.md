# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
- Show
- Create [token required]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category
Table: products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    price integer NOT NULL
)
#### User
- id
- firstName
- lastName
- password
Table :users (
    id SERIAL PRIMARY  KEY,
    firstName VARCHAR(150),
    lastName VARCHAR(150),
    password VARCHAR(255)

)
#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
Table : orders (
    id SERIAL PRIMARY KEY,
  product_id INTEGER,
    quantity INTEGER,
    user_id INTEGER,
    status VARCHAR(15),
    FOREIGN KEY (user_id)  REFERENCES users(id),
       FOREIGN KEY (product_id) REFERENCES products(id)
)


Table :orders_producte (
    id SERIAL PRIMARY KEY,
    product_id INTEGER  NOT NULL,
    order_id INTEGER  NOT NULL,
    quantity INTEGER
)