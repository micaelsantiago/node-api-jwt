import { Router } from 'express';
import AuthController from './controllers/AuthController.js';

const router = Router();

router.get('/register', AuthController.register);
router.get('/login', AuthController.login);

export { router };