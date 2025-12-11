import express from 'express';
import { registerUserController } from '../controllers/user.controller'; 
import { validateUsers } from '../validators/user.validator';
import { validate } from '../middleware/validate';
const router = express.Router();

router.post('/user', validate(validateUsers), registerUserController)

export default router;