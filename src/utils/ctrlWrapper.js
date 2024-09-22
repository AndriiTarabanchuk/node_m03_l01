export const ctrlWrapper = (ctrl) => {
  return async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error); // передаємо помилку далі для обробки
    }
  };
};

// export const ctrlWrapper = (ctrl) => async (req, res, next) => {
//   try {
//     await ctrl(req, res, next);
//   } catch (error) {
//     next(error);
//   }
// };
