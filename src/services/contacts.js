import { contactsModel } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await contactsModel.find();
  return contacts;
};

export const getContactById = async (studentId) => {
  const contact = await contactsModel.findById(studentId);
  return contact;
};
