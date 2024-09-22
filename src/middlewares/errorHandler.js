import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      error: err.message,
    });
  }
  res.status(500).json({
    message: 'Something wrong on our side',
    error: err.message,
  });
};
