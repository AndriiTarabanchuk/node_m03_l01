import { isHttpError, HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (isHttpError(err)) {
    return res.status(err.status).json({
      message: err.name,
      error: err.message,
    });
  }

  // if (err instanceof MongooseError) {
  //   return res.status(500).json({
  //     message: 'MongooseError',
  //     error: err.message,
  //   });
  // }
  res.status(500).json({
    status: 500,
    message: 'Something wrong on our side',
    error: err.message,
  });
};
