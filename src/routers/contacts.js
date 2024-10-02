import { Router } from 'express';
// import { getAllStudents, getStudentById } from '../services/students.js';
import { getAllContacts, getContactById } from '../services/contacts.js';

export const contactsRouter = Router();

contactsRouter.get('/contacts', async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    console.log('Error in get data /contacts', error);
  }
});

contactsRouter.get('/contacts/:contactId', async (req, res) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);
    if (!contact) {
      res.status(404).json({
        message: 'Contact not found',
      });
      return;
    }
    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  } catch (error) {
    console.log('error in get data /contacts/:contactId', error);
  }
});
