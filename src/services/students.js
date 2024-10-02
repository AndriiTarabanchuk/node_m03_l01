import { StudentsModel } from '../db/models/student.js';
import { createPaginationData } from '../utils/createPaginationData.js';

export const getStudents = async ({
  page = 1,
  perPage = 10,
  sortOrder = 'asc',
  sortBy = 'name',
  filter = {},
}) => {
  const skip = (page - 1) * perPage;
  const studentsQuery = StudentsModel.find();

  if (filter.minAge) {
    studentsQuery.where('age').gte(filter.minAge);
  }

  if (filter.maxAge) {
    studentsQuery.where('age').lte(filter.maxAge);
  }

  if (filter.minAvgMark) {
    studentsQuery.where('avgMark').gte(filter.minAvgMark);
  }

  if (filter.maxAvgMark) {
    studentsQuery.where('avgMark').lte(filter.maxAvgMark);
  }

  if (filter.onDuty || filter.onDuty === false) {
    studentsQuery.where('onDuty').equals(filter.onDuty);
  }

  if (filter.gender) {
    studentsQuery.where('gender').equals(filter.gender);
  }

  const [count, students] = await Promise.all([
    StudentsModel.find().merge(studentsQuery).countDocuments(),
    StudentsModel.find()
      .merge(studentsQuery)
      .skip(skip)
      .limit(perPage)
      .sort({
        [sortBy]: sortOrder,
      }),
  ]);

  return {
    students,
    ...createPaginationData(count, page, perPage),
  };
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

export const updateStudent = async (studentId, payload, options = {}) => {
  const rawResult = await StudentsModel.findByIdAndUpdate(studentId, payload, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });
  // console.log(rawResult);
  // if (!rawResult.value) {
  //   throw createHttpError(404, {
  //     status: 404,
  //     message: `Student with id ${studentId} not found!`,
  //   });
  // }

  return {
    student: rawResult.value,
    isNew: !rawResult.lastErrorObject.updatedExisting,
  };
};
