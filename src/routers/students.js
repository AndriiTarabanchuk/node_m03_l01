import { Router } from 'express';
import {
  getStudentsController,
  getStudentByIdController,
  patchStudentController,
  putStudentController,
  deleteStudentByIdController,
  createStudentController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
// import {
//   createStudentValidationSchema,
//   updateStudentValidationSchema,
// } from '../validation/students.js';
import { validateBody } from '../validation/validateBody.js';
import { validateMongoIdParam } from '../validation/validateMongoIdParam.js';
import { updateStudentValidationSchema } from '../validation/updateStudentValidationSchema.js';
import { createStudentValidationSchema } from '../validation/createStudentValidationSchema.js';

const studentsRouter = Router();

studentsRouter.get('/', ctrlWrapper(getStudentsController));

studentsRouter.get(
  '/:studentId',
  validateMongoIdParam('studentId'),
  ctrlWrapper(getStudentByIdController),
);

studentsRouter.post(
  '/',
  validateBody(createStudentValidationSchema),
  ctrlWrapper(createStudentController),
);

studentsRouter.delete('/:studentId', ctrlWrapper(deleteStudentByIdController));

studentsRouter.put(
  '/:studentId',
  validateBody(createStudentValidationSchema),
  ctrlWrapper(putStudentController),
);

studentsRouter.patch(
  '/:studentId',
  validateBody(updateStudentValidationSchema),
  ctrlWrapper(patchStudentController),
);

export default studentsRouter;

// studentsRouter.get('/:studentId', async (req, res, next) => {
//   const { studentId } = req.params;
//   const student = await getStudentById(studentId);

//   // Відповідь, якщо контакт не знайдено
//   if (!student) {
//     res.status(404).json({
//       message: 'Student not found',
//     });
//     return;
//   }

//   // Відповідь, якщо контакт знайдено
//   res.status(200).json({
//     data: student,
//   });
// });

// studentRouter('/students', )
