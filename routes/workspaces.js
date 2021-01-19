import express from 'express'

import { getWorkspaces, createWorkspaces } from '../controllers/workspaces.js'

const router = express.Router();

router.get('/', getWorkspaces);
router.post('/', createWorkspaces);

export default router;