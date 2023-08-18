## NewsBlog Application
Welcome to the NewBlog application! This project is built using Node.js, Express.js, JWT (JSON Web Tokens), third-party middlewares, and MongoDB for building a RESTful API-based blogging platform.
<br>
## Table of Contents<br>
Introduction <br>
Features<br>
Installation<br>
Usage<br>
API Endpoints<br>
Technologies Used<br>
Contributing<br>
License<br>
Introduction<br>
The NewBlog application is a platform where users can create, read, update, and delete blog posts. It uses the Node.js runtime environment along with the Express.js framework for building the API endpoints. JSON Web Tokens (JWT) are used for user authentication and authorization. MongoDB is utilized as the database for storing blog post data.
<br><br>
## Features<br>
User registration and authentication using JWT<br>
Create, read, update, and delete blog posts<br>
User-specific access control and authorization<br>
RESTful API endpoints for interacting with the application<br><br>
## Installation<br><br>
Clone this repository to your local machine using git clone.<br>
Navigate to the project directory using the command line.<br>
Run npm install to install the project dependencies.<br>
Rename the .env.example file to .env and provide your environment variables (e.g., MongoDB connection URI, JWT secret key).<br>
## Usage<br><br>
Start the application using npm start.<br>
The application will be available at http://localhost:3000 (by default). You can configure the port in the .env file.<br>
## API Endpoints<br><br>
POST /user/login: Register a new user.<br>
POST /user/signup: Authenticate and generate a JWT token.<br>
GET /user/users: Retrieve all users posts.<br>
GET /user/posts/:id: Retrieve a specific blog post.<br>
POST /user/posts: Create a new blog post (requires authentication).<br>
PUT /user/posts/:id: Update a specific blog post (requires authentication and ownership).<br>
DELETE /user/posts/:id: Delete a specific blog post (requires authentication and ownership).<br>
## Technologies Used<br><br>
Node.js<br>
Express.js<br>
MongoDB (MongoDB Atlas)<br>
JSON Web Tokens (JWT)<br>
Third-party middlewares (body-parser, cors)<br>
RESTful API design<br>
