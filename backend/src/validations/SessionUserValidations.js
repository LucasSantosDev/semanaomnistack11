const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string()
        .required()
        .email(),
      password: Joi.string()
        .required()
        .min(3)
    })
  })
};
