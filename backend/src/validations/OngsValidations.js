const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string()
        .required()
        .min(3),
      email: Joi.string()
        .required()
        .email(),
      password: Joi.string()
        .required()
        .min(3),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      state: Joi.string()
        .required()
        .length(2)
    })
  })
};
