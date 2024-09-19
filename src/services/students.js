import { studentsModel } from '../db/models/student.js';
export const getAllStudents = async () => {
  const students = await studentsModel.find();
  return students;
};

export const getStudentById = async (studentId) => {
  const students = await studentsModel.findById(studentId);
  return students;
};

// export default { getAllStudents, getStudentById };
