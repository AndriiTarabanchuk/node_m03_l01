import Joi from 'joi';

export const updateStudentValidationSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email(),
  age: Joi.number().integer().min(6).max(99),
  gender: Joi.string().valid('male', 'female', 'other'),
  avgMark: Joi.number().min(2).max(12),
  onDuty: Joi.boolean(),
});
