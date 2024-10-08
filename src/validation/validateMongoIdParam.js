import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const validateMongoIdParam =
  (idName = 'id') =>
  (req, res, next) => {
    const id = req.params[idName];
    if (!isValidObjectId(id)) {
      throw createHttpError(400, 'Invalid id');
    }

    return next();
  };
