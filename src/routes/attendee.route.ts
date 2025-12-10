import express from 'express';
import { registerAttendeeController } from '../controllers/attendee.controller'; 
import { validateUsers } from '../validators/attendees.validator';
import { validate } from '../middleware/validate';
const router = express.Router();

router.post('/attendee/register', validate(validateUsers), registerAttendeeController)

export default router;