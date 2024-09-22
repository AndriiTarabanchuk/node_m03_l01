import {
  createStudent,
  getStudents,
  getStudentById,
  deleteStudentById,
  updateStudent,
} from '../services/students.js';

import createHttpError from 'http-errors';

export const getStudentsController = async (req, res) => {
  const students = await getStudents();
  res.status(200).json({
    status: 200,
    message: 'Successfully found students!',
    dataLen: students.length,
    data: students,
  });
};

export const getStudentByIdController = async (req, res) => {
  const { studentId } = req.params;
  const student = await getStudentById(studentId);
  if (!student) {
    throw createHttpError(404, 'Student not found');
    // res.status(404).json({
    //   status: 404,
    //   message: 'Student not found',
    // });
    return;
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully found student!',
    data: student,
  });
};

export const createStudentController = async (req, res) => {
  const { body } = req;
  const student = await createStudent(body);
  res.status(201).send({
    status: 201,
    message: `Successfully created student!`,
    data: student,
  });
};

export const deleteStudentByIdController = async (req, res) => {
  const { studentId } = req.params;
  const student = await deleteStudentById(studentId);
  if (!student) {
    next(createHttpError(404, 'Student not found'));
    return;
  }
  res.status(204).send(`Item with id=${id} delete.`);
};

export const putStudentController = async (req, res) => {
  const { studentId } = req.params;
  const { body } = req;

  const { student, isNew } = await updateStudent(studentId, body, {
    upsert: true,
  });

  const status = isNew ? 201 : 200;

  res.status(status).send({
    status,
    message: `Successfully upserted a student!`,
    data: student,
  });
};

export const patchStudentController = async (req, res) => {
  const { studentId } = req.params;
  const { body } = req;
  const { student } = await updateStudent(studentId, body);

  if (!student) {
    throw createHttpError(404, `Student with id=${studentId} not found`);
    return;
  }

  res.send({
    status: 200,
    message: 'Successfully updated a student!',
    data: student,
  });
};
