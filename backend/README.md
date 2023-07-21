# SERVER

## Introduction:
- The Backend API is designed to manage the Product and User. It allows clients to  read the products through HTTP requests.

## Architecture:
The backend follows a three-tier architecture:

## Presentation Layer:
- Accepts HTTP requests and communicates with the Application Layer.
## Application Layer:
- Handles business logic and interacts with the Data Access Layer.
## Data Access Layer:
- Manages interactions with the database.

## Installation and Setup:
- To set up the Backend on your local machine, follow these steps:

- Install Node.js and npm.
- Clone the repository from url.
- Run npm install to install the required dependencies.
- Create a PostgreSQL database named _your choose_.
- Set environment variables for database connection: PORT, MONGODB_URL, SECRET_KEY.
- Run npm start to start the backend server.
  
## Configuration:
- Environment variables

## PORT:
- The port on which the server listens (default: 8080).
  
## API Documentation:
## Base URL:
- http://localhost:8080/

## Endpoints:

_These Endpoints are for user._

- POST:- /user/register

- Description: Create a new user.
- Request Body: JSON object with properties firstname, lastname, email & password.
- Response: JSON object with the newly registered user.
  
- POST:- /user/login

- Description: Login registered user.
- Request Body: JSON object with properties email & password.
- Response: JSON object with the username & token.
  
- POST:- /user/logout

- Description: Logged out the user.
- Request Body: Token.
- Response: Success message.

_These Endpoints are for products._

- GET:- /product/getproducts

- Description: Get a list of all products.
- Response: Array of task objects with properties _id, primary_image, alternative_image, title, price, description, old_price, category & type.

- POST:- /product/addproduct

- Description: Create a new product.
- Request Body: JSON object with properties _id, primary_image, alternative_image, title, price, description, old_price, category & type.
- Response: JSON object with the newly created product.

- GET:- /product/:productID

- Description: Get details of a specific product by its _id.
- Response: JSON object with the specific product.

- PATCH:- /product/:productID

- Description: Update the propertie of a product by its _id.
- Request Body: JSON object with properties _id, primary_image, alternative_image, title, price, description, old_price, category & type.
- Response: JSON object with the updated product.

- DELETE:- /product/:productID

- Description: Delete a product by its _id.
- Response: Success message.

## Data Models:
- Product json.
- Examples:-
  {
    "primary_image": primary_image_url,
    "alternative_image": alternative_image_url,
    "title": product_title,
    "price": product_price,
    "description": product_description,
    "old_price": _This key is optional_,
    "category": product_category,
    "type": product_type,
  }
  
## Error Handling:
- HTTP status codes 400, 404, and 500 are used for error responses.
- Error responses include a message field with a description of the error.

## Security Considerations:
- Authentication is implemented in this backend.
- Do not use this backend in a production environment without proper security measures.

Please note that this documentation is for illustration purposes and does not include real functionalities. In a real-world scenario, the documentation would be much more comprehensive, detailed, and tailored to the specific backend system being described.
