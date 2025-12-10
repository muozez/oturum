import express from 'express';
import { registerAttendeeController } from '../controllers/attendee.controller'; 
import { validateUsers } from '../middleware/attendees.middleware';
import { validate } from '../middleware/validate';
const router = express.Router();

router.post('/attendee/register', validate(validateUsers), registerAttendeeController)

export default router;