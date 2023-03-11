"use strict";
const express = require('express');
const Bundler = require('parcel-bundler');
const { join } = require( "path");

/** starts server if mongoose connected */
const startServer = () => {
  const app = express();

  const file = join(__dirname, "../static/login.html");
  const options = {};

  const bundler = new Bundler(file, options);
  app.use(bundler.middleware());
  app.listen(3000, () =>
    console.log(`SERVER STARTED ON PORT ${3000}`)
  );
};

startServer();
 