const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connections');

module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },

  async store(request, response) {
    const { name, email, whatsapp, city, state } = request.body;

    const id = generateUniqueId();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      state
    });

    return response.json({ id });
  }
};
