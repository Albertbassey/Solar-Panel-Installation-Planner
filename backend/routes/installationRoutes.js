import express from 'express';
import { createRequest, getUserRequests } from '../controllers/installationController.js';

const router = express.Router();
router.post('/', createRequest);
router.get('/:userId', getUserRequests);

export default router;
