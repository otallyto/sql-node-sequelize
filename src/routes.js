const express = require("express");
const { address, report, tech, user } = require("./config/require");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ welcome: "API NODE SQL" });
});

routes.get("/users", user.index);
routes.post("/users", user.store);

routes.post("/users/:user_id/addresses", address.store);
routes.get("/users/:user_id/addresses", address.index);

routes.post("/users/:user_id/techs", tech.store);
routes.get("/users/:user_id/techs", tech.index);
routes.delete("/users/:user_id/techs", tech.destroy);

routes.get("/report", report.show);

module.exports = routes;
