"use strict";
const express = require('express');
const Bundler = require('parcel-bundler');





// declare module "express-session" {
//   export interface SessionData {
//     userId: ObjectId;
//   }
// }

// /** Connect to Mongo */
// mongoose
//   .connect(config.mongo.url)
//   .then(() => {
//     console.log("Mongo connected successfully.");
//     startServer();
//   })
//   .catch((error) => console.log(error));

/** starts server if mongoose connected */
const startServer = () => {
  const app = express();

  //to use cors instead of express.static uncoment this
  // app.use(
  //   cors({
  //     origin: ["http://localhost:8080"],
  //     credentials: true,
  //   })
  // );

//   app.use(
//     session({
//       store: MongoStore.create({ mongoUrl: config.mongo.url }),
//       secret: "very secret secret",
//       resave: false,
//       saveUninitialized: false,
//       cookie: {
//         maxAge: 1000 * 60 * 60 * 3, // 3 hours
//         httpOnly: true,
//       },
//     })
//   );
  const file = '../static/login.html';
  const options = {};

  const bundler = new Bundler(file, options);
  app.use(bundler.middleware());
  app.listen(3000, () =>
    console.log(`SERVER STARTED ON PORT ${3000}`)
  );
};
startServer();
