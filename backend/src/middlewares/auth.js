const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const configSession = require("../config/session");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, configSession.secret);

    console.log(decoded);

    next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalid" });
  }
};
