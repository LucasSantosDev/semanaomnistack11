const jwt = require("jsonwebtoken");

const configSession = require("../config/session");
const connection = require("../database/connections");
const encrypt = require("../utils/generateAndValidatEncrypt");

module.exports = {
  async store(request, response) {
    const { email, password } = request.body;

    const ong = await connection("ongs")
      .where("email", email)
      .select(["name", "password"])
      .first();

    if (!ong) {
      return response
        .status(400)
        .json({ error: "No User found with this E-mail and Password" });
    }

    const { id, name, password: hash } = ong;

    if (!encrypt.validatEncrypt(password, hash)) {
      return response.status(400).json({ error: "Password not match" });
    }

    return response.json({
      id,
      email,
      name,
      token: jwt.sign(
        {
          id,
          email,
          name
        },
        configSession.secret,
        {
          expiresIn: configSession.expiresIn
        }
      )
    });
  }
};
