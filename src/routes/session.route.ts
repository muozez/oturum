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
*       responses:
*           200:
*               description: Success
* 
*/

export default router