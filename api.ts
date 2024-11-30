import { Router } from 'express';
import {
  registerHandler,
  loginHandler,
  sendOTPController,
  resetPasswordController,
  logoutHandler,
} from './src/controller/auth-controller';
import {
  getAllUser,
  createUserHandler,
} from './src/controller/user-controller';

const router = Router();


// ===================================AUTHENTICATION===================================
router.post('/register', (req, res) => {
  console.log('Received data:', req.body);
  registerHandler(req, res);
});

router.post('/login', (req, res) => {
  console.log('Received data:', req.body);
  loginHandler(req, res);
})

router.post('/forgot-password', (req, res) => {
  console.log('Received data:', req.body);
  sendOTPController(req, res);
})

router.post('/reset-password', (req, res) => {
  console.log('Received data:', req.body);
  resetPasswordController(req, res);
});

router.post('/logout', (req, res) => {
  logoutHandler(req, res);
});

// ===================================USER===================================

router.get('/allUser', (req, res) => {
  getAllUser(req, res);
});

router.post('/createUser', (req, res) => {
  createUserHandler(req, res);
});

export default router;
