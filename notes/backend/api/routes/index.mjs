import { Router } from 'express';
import userRouter from './users.mjs';
import notesRouter from './notes.mjs';

const router = Router();

router.use(userRouter);
router.use(notesRouter);

export default router