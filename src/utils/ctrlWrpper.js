export const errWrapper = (ctrl) => async (res, req, next) => {
  try {
    await ctrl(req, res, next);
  } catch (error) {
    next(error);
  }
};
