const express = require("express");

const SessionValidations = require("./validations/SessionValidations");
const OngsValidations = require("./validations/OngsValidations");
const IncidentsValidations = require("./validations/IncidentsValidations");
const ProfileValidations = require("./validations/ProfileValidations");

const SessionController = require("./controllers/SessionController");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");

const routes = express.Router();

// Login
routes.post("/session", SessionValidations.create, SessionController.store);

// Ongs
routes.get("/ong", OngController.index);
routes.post("/ong", OngsValidations.create, OngController.store);

// Incidents
routes.get("/incident", IncidentsValidations.list, IncidentController.index);
routes.post("/incident", IncidentsValidations.create, IncidentController.store);
routes.get("/incident/:id", IncidentsValidations.show, IncidentController.show);
routes.delete(
  "/incident/:id",
  IncidentsValidations.delete,
  IncidentController.delete
);

// Profile
routes.get("/profile", ProfileValidations.list, ProfileController.index);

module.exports = routes;
