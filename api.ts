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
  deleteUserHandler,
  getUserHandler,
  updateUserHandler,
} from './src/controller/user-controller';
import {
  createCategory,
  getAllCategory,
  get1Category,
  updateCategory,
  deleteCategory,
} from './src/controller/category-controller';
import { get } from 'http';

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

router.delete('/deleteUser', (req, res) => {
  deleteUserHandler(req, res);
});

router.post('/getUser', (req, res) => {
  getUserHandler(req, res);
});

router.post('/updateUser', (req, res) => {
  updateUserHandler(req, res);
});

// ===================================CATEGORY===================================
router.get('/allCategory', (req, res) => {
  getAllCategory(req, res);
});

router.post('/createCategory', (req, res) => {
  createCategory(req, res);
});

router.post('/get1Category', (req, res) => {
  get1Category(req, res);
});

router.put('/updateCategory', (req, res) => {
  updateCategory(req, res);
});

router.delete('/deleteCategory', (req, res) => {
  deleteCategory(req, res);
});
// ===================================BRAND===================================

router.get('/allBrand', (req, res) => {

});

router.post('/createBrand', (req, res) => {

});

router.delete('/deleteBrand', (req, res) => {

});

router.patch('/getBrand', (req, res) => {

});

export default router;
