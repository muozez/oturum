import express from 'express';
import { registerUserController } from '../controllers/user.controller'; 
import { validateUsers } from '../validators/user.validator';
import { validate } from '../middleware/validate';
const router = express.Router();

/**
 * @openapi
 * /user:
 *   post:
 *     summary: Register a new user using a valid QR token
 *     tags:
 *       - users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - qrToken
 *               - name
 *               - surName
 *               - email
 *               - telephone
 *             properties:
 *               qrToken:
 *                 type: string
 *                 description: Registration token (must exist in RegistrationToken collection)
 *                 example: "2d2b9b9b-5af1-4d60-8f8a-2e21f2b7a2d1"
 *               name:
 *                 type: string
 *                 example: "Ada"
 *               surName:
 *                 type: string
 *                 example: "Lovelace"
 *               email:
 *                 type: string
 *                 example: "ada@example.com"
 *               telephone:
 *                 type: string
 *                 description: 10-11 digits only
 *                 example: "5551234567"
 *               metadata:
 *                 type: object
 *                 required: []
 *                 properties:
 *                   department:
 *                     type: string
 *                     example: "Computer Science"
 *                   grade:
 *                     type: string
 *                     example: "Senior"
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Validation error or duplicate telephone/email
 *       403:
 *         description: QR expired / invalid token
 */

router.post('/user', validate(validateUsers), registerUserController)

export default router;