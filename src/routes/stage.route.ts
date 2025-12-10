import express from 'express';
import { createNewSession } from '../controllers/stage.controller';
import { validate } from '../middleware/validate';
import { validateSessions } from '../validators/stage.validator';
const router = express.Router();

router.post('/', validate(validateSessions), createNewSession);

export default router