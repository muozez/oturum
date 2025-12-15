import { createToken } from "../controllers/token.controller";
import express from 'express';

const router = express.Router();

router.get('/generate-qr', createToken);

export default router
