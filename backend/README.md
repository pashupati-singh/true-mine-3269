# Server introduction:
Our E-Commerce Website Backend is the backbone of our online shopping experience, handling critical operations and ensuring smooth functionality. It serves as the engine that powers product management, user authentication, order processing, and more. With its robust architecture and scalable design, our backend ensures a seamless shopping experience for both customers and administrators. The Backend API is designed to manage the Product and User. It allows clients to  read the products through HTTP requests.

## Architecture:
The backend follows a three-tier architecture:

### Presentation Layer: Accepts HTTP requests and communicates with the Application Layer.
### Application Layer: Handles business logic and interacts with the Data Access Layer.
### Data Access Layer: Manages interactions with the database.

## Key Features:
- _Product Management:_ Effortlessly add, update, and remove products from the catalog. Categorize and organize products for easy discovery.

- _User Authentication:_ Secure user registration and authentication to ensure a safe shopping environment. Allow customers to manage their profiles and track their order history.

- _Shopping Cart_ and Checkout: Enable customers to add products to their cart, proceed to checkout, and complete their purchases securely.

- _Order Processing:_ Efficiently handle order fulfillment, shipment tracking, and payment processing for a seamless customer experience.

- _Inventory Management:_ Track product availability, stock levels, and handle restocking processes.

- _Discounts and Promotions:_ Implement special offers, discounts, and promotional campaigns to attract and retain customers.

- _Reporting and Analytics:_ Generate valuable insights through data-driven reports, helping administrators make informed decisions and optimize business strategies.

## Technologies:
Our backend leverages cutting-edge technologies to deliver exceptional performance and maintainability:

- _Node.js:_ A versatile and efficient JavaScript runtime that powers our server-side logic.

- _Express.js:_ A flexible and lightweight web application framework that facilitates the development of robust APIs.

- _MongoDB:_ A powerful NoSQL database for efficient data storage and retrieval.

- _Mongoose:_ An elegant MongoDB object modeling tool that simplifies data manipulation and validation.

- _JSON Web Tokens (JWT):_ Securely manage user authentication and authorization.

- _Bcrypt:_ Securely manage user-sensitive data.

- _RESTful API:_ We follow REST principles to build an intuitive and predictable API.

- _Custom middleware:_ A user authentication middleware for Node.js that ensures secure and customizable authentication.

## Installation and Setup:
To get started with our E-Commerce Website Backend, follow our easy installation instructions.
 
- Install Node.js and npm.

- Clone the repository from the URL.

- Run npm install to install the required dependencies.

- Create a PostgreSQL database named _your choose_.

- Set environment variables for database connection: PORT, MONGODB_URL, SECRET_KEY.

- Run npm start to start the backend server.
  
## Configuration:
- Environment variables

## API Documentation:
For detailed information on the available endpoints, request parameters, and responses, refer to our API Documentation.

_PORT:_ The port on which the server listens (default: 8080).

_Base URL:_ http://localhost:8080/

## Endpoints:

### These Endpoints are for the user.

- _POST:-_ /user/register

_Note:-_ Now while registration you have to check that password should contain all the following things, otherwise user cannot register.
=> At least one uppercase character
=> At least one number
=> At least a special character
=> The length of password should be at least 8 characters long

- _Description:_ Create a new user.
- _Request Body:_ JSON object with properties firstname, lastname, email & password.
- _Response:_ JSON object with the newly registered user & success message.
  
- _POST:-_ /user/login

- _Description:_ Log in to the registered user.
- _Request Body:_ JSON object with properties email & password.
- _Response:_ JSON object with the username, token & success message.
  
- _POST:-_ /user/logout

- _Description:_ Logged out the user.
- _Request Body:_ Need token to be Logged.
- _Response:_ Success message.

### These Endpoints are for products.

- _GET:-_ /product/getproducts

- _Note:-_ You can use this route also for search based on title, sort based on price, and pagination. Please use these keys to access these functionality _title, 
   sortbyprice, pageno, pagelimit_

_Please use these category & type key-value pair to perform any operation on these fields._

1. category: gardening_inputs, type: fertilizers
2. category: gardening_inputs, type: grow_bags
3. category: gardening_inputs, type: grow_beds
4. category: gardening_inputs, type: pots
5. category: gardening_inputs, type: potting_medium
6. category: hydroponics, type: accessorie_hydroponics
7. category: hydroponics, type: diy_kits_hydroponics
8. category: hydroponics, type: growing_media_hydroponics
9. category: hydroponics, type: instrument_hydroponics
10. category: hydroponics, type: nutrient_hydroponics
11. category: organic_farming,type: bio_fertilizers
12. category: organic_farming,type: bio_pesticides
13. category: organic_farming,type: organic_fertilizers
14. category: seeds, type: flower_seeds
15. category: seeds, type: fruit_seeds
16. category: seeds, type: herb_seeds
17. category: seeds, type: microgreens_seeds
18. category: seeds, type: vegetable_seeds

- _Description:_ Get a list of all products or according to params.
- _Response:_ Array of task objects with properties _id, primary_image, alternative_image, title, price, description, old_price, category & type.

- _GET:-_ /product/getproduct/:productID

- _Description:_ Get details of a specific product by its _id.
- _Request Body:_ Product _id as a string.
- _Response:_ JSON object with the specific product.

- _POST:-_ /product/addproduct

- _Description:_ Create a new product.
- _Request Body:_ JSON object with properties _id, primary_image, alternative_image, title, price, description, old_price, category & type.
- _Response:_ JSON object with the newly created product & success message.

- _PATCH:-_ /product/update/:productID

- _Description:_ Update the propertie of a product by its _id.
- _Request Body:_ JSON object with properties _id, primary_image, alternative_image, title, price, description, old_price, category & type.
- _Response:_ JSON object with the updated product & success message.

- _DELETE:-_ /product/delete/:productID

- _Description:_ Delete a product by its _id.
- _Response:_ Success message.

### These Endpoints are for cart.

- _GET:-_ /cart/cartproducts

- _Description:_ Get a list of logging user cart products.
- _Response:_ Array of task objects with properties _id, primary_image, alternative_image, title, price, description, old_price, category & type.

- _POST:-_ /cart/addtoproduct

- _Description:_ Add a new cart product in the logging user cart lists.
- _Request Body:_ JSON object with properties _id, primary_image, alternative_image, title, price, description, old_price, category & type.
- _Response:_ JSON object with the newly created cart product in the logging user cart lists & success message.

- _DELETE:-_ /cart/delete/:cartproductID

- _Description:_ Delete a cart product in the logging user cart lists by its _id.
- _Response:_ Success message.

## Data Models:
- User example:-
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  
- Product & cart example:-
  {
    primary_image: { type: String, required: true },
    alternative_image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    old_price: { type: String, required: false },
    category: { type: String, required: true },
    type: { type: String, required: true },
  },
  
## Error Handling:
- HTTP status codes 400, 404, and 500 are used for error responses.
- Error responses include a message field with a description of the error.

## Security Considerations:
- Authentication is implemented in this backend.
- Do not use this backend in a production environment without proper security measures.
