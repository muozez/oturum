import express from 'express';
import { createNewSession, getSessions, patchSessions } from '../controllers/stage.controller';
import { validate } from '../middleware/validate';
import { validateSessions } from '../validators/stage.validator';
const router = express.Router();

router.post('/', validate(validateSessions), createNewSession);
router.get('/', getSessions);
router.get('/:id', getSessions);
router.patch('/:id', validate(validateSessions), patchSessions)


export default router