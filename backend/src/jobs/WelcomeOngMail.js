const mail = require("../lib/Mail");

class WelcomeOngMail {
  get key() {
    return "WelcomeOngMail";
  }

  async handle({ data }) {
    console.log(">> Process send mail welcome to ONG");

    const { id, name, email, password } = data;

    await mail.sendMail({
      to: `${name} <${email}>`,
      subject: "Be The Hero - Credênciais da ONG",
      template: "welcome-ong",
      context: {
        id,
        name,
        password,
        url: "#"
      }
    });
  }
}

module.exports = new WelcomeOngMail();
