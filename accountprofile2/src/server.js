'use strict';
import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';
const user = require('./models/user');

// Import body parser to parse API requests
const bodyParser = require('body-parser');

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

// Mount bodyParser
app.use(bodyParser.json());

/**
 * Routes
 */

/* Test submitted credentials against DB and return user object if authorized */
app.post("/login", (req, res) => {
  user.loginUser(req.body.email, req.body.password, (result) => {
    if (Object.keys(result).length > 0) {
      res.json({
        "message": "User logged in successfully",
        "data": result,
        "success": true
      });
    } else {
      res.json({
        "message": "Could not log in",
        "data": result,
        "success": false
      });
    }
  });
});

/* Create a new user record in the db */
app.post("/create", (req, res) => {
  user.createUser(req, (result) => {
    if (Object.keys(result).length > 0) {
      res.json({
        "message": "User created successfully",
        "data": result,
        "success": true
      });
    } else {
      res.json({
        "message": "Could not create user",
        "data": result,
        "success": false
      });
    }
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
