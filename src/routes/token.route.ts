import { createToken } from "../controllers/token.controller";
import express from 'express';

const router = express.Router();

/**
 * @openapi
 * /generate-qr:
 *   get:
 *     summary: Generate a short-lived registration URL containing a unique token
 *     tags:
 *       - tokens
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 url:
 *                   type: string
 *                   example: "http://localhost:3000/register?ref=2d2b9b9b-5af1-4d60-8f8a-2e21f2b7a2d1"
 *       400:
 *         description: Failed to generate token
 */

router.get('/generate-qr', createToken);

export default router
