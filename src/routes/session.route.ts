import { verifyScan } from "../controllers/session.controller";
import express from 'express';

const router = express.Router();

router.post('/verify-scan', verifyScan)

/**
* @openapi
* /verify-scan:
*   post:
*       summary: endpoint where session participants will verify via QR code
*       tags:
*           - verify-scan
*       requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                       type: object
*                       required:
*                           - userId
*                           - sessionOrder
*                           - checkInMethod
*                       properties:
*                           userId:
*                               type: string
*                               example: "694711bf37b100e8a09fa7c5"
*                           sessionOrder:
*                               type: number
*                               example: 1
*                           checkInMethod:
*                               type: string
*                               example: "token"
*       responses:
*           200:
*               description: Success
* 
*/

export default router