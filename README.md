# Full Stack Book Store App

## https://book-store-frontend-eta-orpin.vercel.app/

![alt text](github-cover.png)

### Description and Features
This website is a fully functioning book store. Users can create an account, login, review book titles and descriptions and place orders for books. There are differnt book categories, genres, and prices.  Authenication to login and out of to user accounts, shopping cart for stored selections before purchase, and a desciption page for each book. There's also an admin dashboard that allow admin users to add books, edit books, delete books, track sales inventory and revenue. 

The technology stack I used was MERN. MongoDB, Express.js, React, and Node.js. I choose the MERN stack for its ability to use JavaScript throughout the entire application development process, from front-end to back-end and even database interactions. This simplifies development, enhances code reusability, and allows for faster development cycles. React handles the frontend (user interface), collecting user input and sending it to the backend. Express.js manages the API routes and processes requests between the client and server.
Node.js runs the server and handles authentication and other backend logic. While MongoDB stores the application's data in a scalable and flexible manner. 

I built my API by creating the book data using an id, title, description, category, trending, cover image, old price and new price categories. I created 20 books with different data for eac of these categories. I then used Postman to design, build, test, and manage the API. Postman is used throughout the API lifecycle, from initial design to deployment and ongoing monitoring.  I was able to send various HTTP requests (GET, POST, PUT, DELETE) to APIs, view the responses, and analyze the results. By using Postman, I was able to write and run automated tests for my API and I used Axios to make requests to the API and server. I used RTK Query functionality to define a set of "endpoints" that describe how to retrieve data from my backend API and other async sources, including the configuration of how to fetch and transform the data retrieved.

I used Firebase to provide authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in. I used Mongoose schemas to provide a structured way to interact with MongoDB by building middleware, queries, and a user-friendly interface. I used JWT (jasonwebtokens), a token-based authentication mechanism to securely transmit information between parties and Bcrypt (a password hashing algorithm) to store passwords securely. I incorporated Environment Variables to store configuration settings, API keys, and my database credentials. In order to add a little personality and enhance UI with my site, I used Swiper React Components, React Icons, and SweetAlert2. Finally, I configured my project with Vercel to deploy my website.


How to run this project:

## For Frontend
### Follow the steps below to run the project:

Firstly clone or unzip the project folder.

Go to the Frontend directory by using the following command cd Frontend.

Create a .env.local file in the backend root directory as the same level where the package.json is located and keep the following environment variables there:

>>> Setup firebase app and configure the environment.

VITE_API_KEY="AIzaSyDDo9N9cqllylTwpEf2pI_muzfABaCW5ws"

VITE_Auth_Domain="nesmith-book-store-app.firebaseapp.com"

VITE_PROJECT_ID="nesmith-book-store-app"

VITE_STORAGE_BUCKET="nesmith-book-store-app.firebasestorage.app"

VITE_MESSAGING_SENDERID="1067281616360"

VITE_APPID="1:1067281616360:web:2602111cbd7abb7002285d"

Next run npm install commend to install node dependencies.

Finally, to run the project, use npm run dev command.

## For Backend
### Follow the steps below to run the project:

Firstly clone or unzip the project folder.

Go to the Backend directory by using the following command  cd Backend.

Then run npm install command to install node dependencies.

Create a .env file in the Backend root directory as the same level where the package.json is located and keep the following environment variables there:

DB_URL = 'mongodb+srv://antionenesmith:6qTwr6CdhYzgqLgX@cluster0.f9jghtb.mongodb.net/book-store?retryWrites=true&w=majority&appName=Cluster0'

JWT_SECRET_KEY = '591e0a9f8e3f74b2ad5f6299c2e7529360f8819632f33ad75c8e452b750093e88d5a2e98980e0b1380a531dcc42c2df6a83398184cb695047efcc86b8267d0e1'

Note: Please setup mongodb and change the MongoDB url and set your JWT.

Finally, run the project by using the npm run start:dev command.

## To login as an admin to view the dashboad:
### Go to https://book-store-frontend-eta-orpin.vercel.app/admin

#### username: admin
#### password: 7654321
