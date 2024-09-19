import { Router } from 'express';
import { studentsRouter } from './students.js';
import { contactsRouter } from './contacts.js';

const router = Router();

router.use('/students', studentsRouter);
router.use('/contacts', contactsRouter);

export default router;
