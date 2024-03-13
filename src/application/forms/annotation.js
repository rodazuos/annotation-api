const Joi = require("joi");

const { BadRequestException } = require("../../infrastructure/errors");

const validateSchema = async (schema, data) => {
  try {
    const validFields = await schema.validateAsync(data, { abortEarly: false });
    return validFields;
  } catch (error) {
    const errors = error.details.map((error) => error.message);
    throw BadRequestException(JSON.stringify(Object.assign({}, errors)));
  }
};

const sanitizeCreation = async (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    priority: Joi.number().min(1).max(3).required(),
  });

  return validateSchema(schema, data);
};

module.exports = {
  sanitizeCreation,
};
