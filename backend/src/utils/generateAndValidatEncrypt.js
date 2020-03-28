const bcrypt = require("bcrypt");
const saltRounds = 8;

class Encrypt {
  generateEncrypt(text) {
    return bcrypt.hashSync(text, saltRounds);
  }

  validatEncrypt(text, hash) {
    return bcrypt.compareSync(text, hash);
  }
}

module.exports = new Encrypt();
