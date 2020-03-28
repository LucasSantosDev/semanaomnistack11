const connection = require("../database/connections");
const encrypt = require("../utils/generateAndValidatEncrypt");

module.exports = {
  async index(_, response) {
    const users = await connection("users").select("*");

    return response.json(users);
  },

  async store(request, response) {
    const { name, email, password, whatsapp } = request.body;

    const newPassword = encrypt.generateEncrypt(password);

    // Validando duplicidade no email
    const emailExists = await connection("users")
      .where("email", email)
      .select("*")
      .first();

    if (emailExists) {
      return response.status(400).json({ error: "E-mail already exists." });
    }

    await connection("users").insert({
      id,
      name,
      email,
      password: newPassword,
      whatsapp
    });

    return response.json({ id });
  }
};
