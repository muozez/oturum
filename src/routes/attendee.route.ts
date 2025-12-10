import express from 'express';
import { registerAttendeeController } from '../controllers/attendee.controller'; 

const router = express.Router();

router.post('/attendee/register', registerAttendeeController)

export default router;