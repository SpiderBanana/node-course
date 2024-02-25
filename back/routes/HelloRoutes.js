import express from "express";
import { getHello, getHelloFrench } from '../controllers/HelloController.js';

const router = express.Router();

router.get('/', getHello);
router.get('/french', getHelloFrench);

export default router