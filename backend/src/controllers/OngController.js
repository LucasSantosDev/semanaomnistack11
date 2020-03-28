const generateUniqueId = require("../utils/generateUniqueId");
const connection = require("../database/connections");
const encrypt = require("../utils/generateAndValidatEncrypt");

module.exports = {
  async index(request, response) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },

  async store(request, response) {
    const { name, email, password, whatsapp, city, state } = request.body;

    const id = generateUniqueId();

    const newPassword = encrypt.generateEncrypt(password);

    await connection("ongs").insert({
      id,
      name,
      email,
      password: newPassword,
      whatsapp,
      city,
      state
    });

    return response.json({ id });
  }
};
