import { verifyScan } from "../controllers/session.controller";
import express from 'express';

const router = express.Router();

router.post('/verify-scan', verifyScan)

export default router