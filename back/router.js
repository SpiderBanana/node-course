import express from "express";
import agent from './routes/AgentsRoutes.js';    
import hello from './routes/HelloRoutes.js';
import auth from './routes/AuthRoutes.js';
import user from './routes/UserRoutes.js';

const router = express.Router();

router.use('/agents', agent);
router.use('/hello', hello);
router.use('/auth', auth);
router.use('/user', user);

export default router