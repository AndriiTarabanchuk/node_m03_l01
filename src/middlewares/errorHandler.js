import { HttpError } from 'http-errors';

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      message: err.name,
      error: err.message,
    });
  }
  res.status(500).json({
    message: 'Something wrong on our side',
    error: err.message,
  });
};

export default errorHandlerMiddleware;
