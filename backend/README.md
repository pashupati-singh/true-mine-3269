# Server introduction:
Our E-Commerce Website Backend is the backbone of our online shopping experience, handling critical operations and ensuring smooth functionality. It serves as the engine that powers product management, user authentication, order processing, and more. With its robust architecture and scalable design, our backend ensures a seamless shopping experience for both customers and administrators. The Backend API is designed to manage the Product and User. It allows clients to  read the products through HTTP requests.

## Architecture:
The backend follows a three-tier architecture:

### Presentation Layer: Accepts HTTP requests and communicates with the Application Layer.
### Application Layer: Handles business logic and interacts with the Data Access Layer.
### Data Access Layer: Manages interactions with the database.

## Key Features
- _Product Management:_ Effortlessly add, update, and remove products from the catalog. Categorize and organize products for easy discovery.

- _User Authentication:_ Secure user registration and authentication to ensure a safe shopping environment. Allow customers to manage their profiles and track their order history.

- _Shopping Cart_ and Checkout: Enable customers to add products to their cart, proceed to checkout, and complete their purchases securely.

- _Order Processing:_ Efficiently handle order fulfillment, shipment tracking, and payment processing for a seamless customer experience.

- _Inventory Management:_ Track product availability, stock levels, and handle restocking processes.

- _Discounts and Promotions:_ Implement special offers, discounts, and promotional campaigns to attract and retain customers.

- _Reporting and Analytics:_ Generate valuable insights through data-driven reports, helping administrators make informed decisions and optimize business strategies.

## Technologies Used
Our backend leverages cutting-edge technologies to deliver exceptional performance and maintainability:

- _Node.js:_ A versatile and efficient JavaScript runtime that powers our server-side logic.

- _Express.js:_ A flexible and lightweight web application framework that facilitates the development of robust APIs.

- _MongoDB:_ A powerful NoSQL database for efficient data storage and retrieval.

- _Mongoose:_ An elegant MongoDB object modeling tool that simplifies data manipulation and validation.

- _JSON Web Tokens (JWT):_ Securely manage user authentication and authorization.

- _Bcrypt:_ Securely manage user sensitive data.

- _RESTful API:_ We follow REST principles to build an intuitive and predictable API.

- _Custom middleware:_ A user authentication middleware for Node.js that ensures secure and customizable authentication.

## Installation and Setup:
To get started with our E-Commerce Website Backend, follow our easy installation instructions.
 
- Install Node.js and npm.

- Clone the repository from url.

- Run npm install to install the required dependencies.

- Create a PostgreSQL database named _your choose_.

- Set environment variables for database connection: PORT, MONGODB_URL, SECRET_KEY.

- Run npm start to start the backend server.
  
## Configuration:
- Environment variables

## API Documentation:
- For detailed information on the available endpoints, request parameters, and responses, refer to our API Documentation.

_PORT:_ The port on which the server listens (default: 8080).

_Base URL:_ http://localhost:8080/

## Endpoints:

_These Endpoints are for user._

- POST:- /user/register

- Description: Create a new user.
- Request Body: JSON object with properties firstname, lastname, email & password.
- Response: JSON object with the newly registered user & success message.
  
- POST:- /user/login

- Description: Login the registered user.
- Request Body: JSON object with properties email & password.
- Response: JSON object with the username, token & success message.
  
- POST:- /user/logout

- Description: Logged out the user.
- Request Body: Need token to Logged.
- Response: Success message.

_These Endpoints are for products._

- GET:- /product/getproducts

- _Note:-_ You can use this route also for search based on title, sort based on price, and pagination. Please use these keys to access these functionality _title, 
   sortbyprice, pageno, pagelimit_

- Description: Get a list of all products.
- Response: Array of task objects with properties _id, primary_image, alternative_image, title, price, description, old_price, category & type.

- GET:- /product/getproduct/:productID

- Description: Get details of a specific product by its _id.
- Request Body: Product _id as a string.
- Response: JSON object with the specific product.

- POST:- /product/addproduct

- Description: Create a new product.
- Request Body: JSON object with properties _id, primary_image, alternative_image, title, price, description, old_price, category & type.
- Response: JSON object with the newly created product & success message.

- PATCH:- /product/update/:productID

- Description: Update the propertie of a product by its _id.
- Request Body: JSON object with properties _id, primary_image, alternative_image, title, price, description, old_price, category & type.
- Response: JSON object with the updated product & success message.

- DELETE:- /product/delete/:productID

- Description: Delete a product by its _id.
- Response: Success message.

_These Endpoints are for cart._

- GET:- /cart/cartproducts

- Description: Get a list of logging user cart products.
- Response: Array of task objects with properties _id, primary_image, alternative_image, title, price, description, old_price, category & type.

- POST:- /cart/addtoproduct

- Description: Create a new cart product.
- Request Body: JSON object with properties _id, primary_image, alternative_image, title, price, description, old_price, category & type.
- Response: JSON object with the newly created cart product & success message.

- DELETE:- /cart/delete/:cartproductID

- Description: Delete a cart product by its _id.
- Response: Success message.

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

Please note that this documentation is for illustration purposes and does not include real functionalities. In a real-world scenario, the documentation would be much more comprehensive, detailed, and tailored to the specific backend system being described.
