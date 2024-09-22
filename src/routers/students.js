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

const studentsRouter = Router();

studentsRouter.get('/', ctrlWrapper(getStudentsController));

studentsRouter.get('/:studentId', ctrlWrapper(getStudentByIdController));

studentsRouter.post('/', ctrlWrapper(createStudentController));

studentsRouter.delete('/:studentId', ctrlWrapper(deleteStudentByIdController));

studentsRouter.put('/:studentId', ctrlWrapper(putStudentController));

studentsRouter.patch('/:studentId', ctrlWrapper(patchStudentController));

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
