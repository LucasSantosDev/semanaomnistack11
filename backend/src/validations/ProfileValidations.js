const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  list: celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  })
};
