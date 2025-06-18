# Full Stack Book Store App

![alt text](github-cover.png)

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

