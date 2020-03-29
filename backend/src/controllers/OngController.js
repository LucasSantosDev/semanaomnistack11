const generateUniqueId = require("../utils/generateUniqueId");
const connection = require("../database/connections");
const encrypt = require("../utils/generateAndValidatEncrypt");

const WelcomeOngMail = require("../jobs/WelcomeOngMail");
const Queue = require("../lib/Queue");

module.exports = {
  async index(_, response) {
    const ongs = await connection("ongs").select([
      "id",
      "name",
      "email",
      "whatsapp",
      "city",
      "state"
    ]);

    return response.json(ongs);
  },

  async store(request, response) {
    const { name, email, password, whatsapp, city, state } = request.body;

    const id = generateUniqueId();

    const newPassword = encrypt.generateEncrypt(password);

    // Validando duplicidade no email
    const emailExists = await connection("ongs")
      .where("email", email)
      .select("*")
      .first();

    if (emailExists) {
      return response.status(400).json({ error: "E-mail already exists." });
    }

    await connection("ongs").insert({
      id,
      name,
      email,
      password: newPassword,
      whatsapp,
      city,
      state
    });

    // Enviando email para o cliente com suas credênciais em formato de Job
    await Queue.add(WelcomeOngMail.key, {
      id,
      name,
      email,
      password
    });

    return response.json({ id });
  }
};
