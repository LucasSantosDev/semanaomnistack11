const connection = require("../database/connections");
const encrypt = require("../utils/generateAndValidatEncrypt");

module.exports = {
  async store(request, response) {
    const { id, password } = request.body;

    const ong = await connection("ongs")
      .where("id", id)
      .select(["name", "password"])
      .first();

    if (!ong) {
      return response
        .status(400)
        .json({ error: "No ONG found with this ID and Password" });
    }

    const { name, password: hash } = ong;

    if (!encrypt.validatEncrypt(password, hash)) {
      return response.status(400).json({ error: "Password not match" });
    }

    return response.json({ id, name });
  }
};
