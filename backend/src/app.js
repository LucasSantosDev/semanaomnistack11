const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");
const Sentry = require("@sentry/node");
const sentryConfig = require("./config/sentry");
const _ = require("express-async-errors");

const app = express();

Sentry.init(sentryConfig);

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

// cors({origin: 'dominio.com.br'})
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

module.exports = app;
