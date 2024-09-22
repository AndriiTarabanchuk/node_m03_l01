import { StudentsModel } from '../db/models/student.js';

export const getStudents = async () => {
  const students = await StudentsModel.find();
  return students;
};

export const getStudentById = async (studentId) => {
  const student = await StudentsModel.findById(studentId);
  return student;
};

export const createStudent = async (payload) => {
  return await StudentsModel.create(payload);
};

export const deleteStudentById = async (studentId) => {
  const student = await StudentsModel.findByIdAndDelete({
    _id: studentId,
  });
  return student;
};

export const updateStudent = async (id, payload, options = {}) => {
  const rawResult = await StudentsModel.findByIdAndUpdate(id, payload, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });

  if (!rawResult.value) {
    throw createHttpError(404, {
      status: 404,
      message: `Student with id ${id} not found!`,
    });
  }
  // if (!rawResult || !rawResult.value) return null;

  return {
    student: rawResult.value,
    isNew: !rawResult.lastErrorObject.updatedExisting,
  };
};
