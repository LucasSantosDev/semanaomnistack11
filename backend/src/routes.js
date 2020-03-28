const express = require("express");

// Validations
const SessionOngValidations = require("./validations/SessionOngValidations");
const SessionUserValidations = require("./validations/SessionUserValidations");
const OngsValidations = require("./validations/OngsValidations");
const IncidentsValidations = require("./validations/IncidentsValidations");
const UsersValidations = require("./validations/UsersValidations");
const ProfileValidations = require("./validations/ProfileValidations");

// Controllers
const SessionOngController = require("./controllers/SessionOngController");
const SessionUserController = require("./controllers/SessionUserController");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const UserController = require("./controllers/UserController");
const ProfileController = require("./controllers/ProfileController");

// Middlewares
const authMiddleware = require("./middlewares/auth");

const routes = express.Router();

// Login
routes.post(
  "/session-ong",
  SessionOngValidations.create,
  SessionOngController.store
);
routes.post(
  "/session-user",
  SessionUserValidations.create,
  SessionUserController.store
);

// Registro de ONG e User
routes.post("/ong", OngsValidations.create, OngController.store);
routes.post("/user", UsersValidations.create, UserController.store);

// Rotas protegidas pelo JWT
routes.use(authMiddleware);

routes.get("/ong", OngController.index);
// routes.get("/user", UserController.index); // Não há necessidade por enquanto
routes.get("/incident", IncidentsValidations.list, IncidentController.index);
routes.post("/incident", IncidentsValidations.create, IncidentController.store);
routes.get("/incident/:id", IncidentsValidations.show, IncidentController.show);
routes.delete(
  "/incident/:id",
  IncidentsValidations.delete,
  IncidentController.delete
);
routes.get("/profile", ProfileValidations.list, ProfileController.index);

module.exports = routes;
