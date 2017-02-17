'use strict';
import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';
// Import body parser to parse API requests
const bodyParser = require('body-parser');
// Import bcrypt to hash and test user passwords
const bcrypt = require('bcrypt');

// Initialize DB connector and set Promise library
const mongoose = require("mongoose");
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));


// Mount bodyParser
app.use(bodyParser.json());
/* Test submitted credentials against DB and return user object if authorized */
app.post("/login",function(req,res) {
    const submittedEmail = req.body.email;
    const submittedPassword = req.body.password;
    
    const user = {
        firstName: "Janice",
        lastName: "Bobson",
        email: "janice@me.com",
        avatar: "http://i.pravatar.cc/300"
    };
    res.json({
      "message": "logged in successfully",
      "data": user,
      "success": true
    });
});

// universal routing and rendering
app.get('*', (req, res) => {
    console.log("req.url: "  + req.url);
    match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }
      console.log("redirecting to :",redirectLocation);
      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }

    //   console.log({ markup })
      // render the index template with the embedded React markup
      return res.render('index', { markup });
    }
  );
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
