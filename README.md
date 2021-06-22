# Log users actions
A simple and basic application that logs some "users" actions to the database.

## How to use
1. Run `npm install`
2. Create your MongoDB atlas and get it's connection URL.
3. Choose any local port.
4. Then, create a .env file and type in:
    `MONGODB_CONNECTION="your_atlas_connection_url"`
    `SERVER_PORT=your_local_port`
5. Go to localhost:your_port
6. Make a "login" or "register" and check your MongoDB atlas collections.

## About
* Uses Mongoose for connecting with MongoDB server.
* Uses Express.
* No data encryption (it's just a basic system).

## Features
* Logs user account creation date.
* Logs amount of times that some user logged in.
* Logs all the user login dates.
* Sends response content as JSON for easier front-end consuming.