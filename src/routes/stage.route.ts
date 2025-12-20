import express from 'express';
import { createNewSession, getSessions, patchSessions, deleteSession } from '../controllers/stage.controller';
import { validate } from '../middleware/validate';
import { validateSessions } from '../validators/stage.validator';
const router = express.Router();

/**
 * @openapi
 * /stage:
 *   post:
 *     summary: Create a new session (stage/admin)
 *     tags:
 *       - stage
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - speaker
 *               - startTime
 *               - endTime
 *             properties:
 *               sessionOrder:
 *                 type: number
 *                 example: 1
 *               title:
 *                 type: string
 *                 example: "Opening Keynote"
 *               speaker:
 *                 type: string
 *                 example: "Dr. Smith"
 *               description:
 *                 type: string
 *                 example: "Welcome talk and agenda"
 *               startTime:
 *                 type: string
 *                 description: Date string convertible by `new Date(...)`
 *                 example: "2025-12-21T09:00:00.000Z"
 *               endTime:
 *                 type: string
 *                 description: Date string convertible by `new Date(...)`
 *                 example: "2025-12-21T10:00:00.000Z"
 *               hallName:
 *                 type: string
 *                 example: "Main Hall"
 *               isCheckinActive:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Validation error
 *
 *   get:
 *     summary: List all sessions
 *     tags:
 *       - stage
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Error
 *
 * /stage/{id}:
 *   get:
 *     summary: Get a single session by sessionOrder (numeric)
 *     tags:
 *       - stage
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         example: 1
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Session not found / error
 *
 *   patch:
 *     summary: Update a session (note current implementation uses {id} as _id in service)
 *     tags:
 *       - stage
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "67669f3d9d7d5aa1c8f2fabc"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - speaker
 *               - startTime
 *               - endTime
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated title"
 *               speaker:
 *                 type: string
 *                 example: "Updated speaker"
 *               startTime:
 *                 type: string
 *                 example: "2025-12-21T09:30:00.000Z"
 *               endTime:
 *                 type: string
 *                 example: "2025-12-21T10:30:00.000Z"
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Session not found / validation error
 *
 *   delete:
 *     summary: Delete a session (note current implementation uses {id} as _id in service)
 *     tags:
 *       - stage
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "67669f3d9d7d5aa1c8f2fabc"
 *     responses:
 *       200:
 *         description: Delete success
 *       400:
 *         description: Not found / error
 */

router.post('/', validate(validateSessions), createNewSession);
router.get('/', getSessions);
router.get('/:id', getSessions);
router.patch('/:id', validate(validateSessions), patchSessions);
router.delete('/:id', deleteSession)

export default router