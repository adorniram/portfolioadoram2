import express from 'express';
import { 
  register, 
  login, 
  getProfile, 
  updateProfile,
  getUsers 
} from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';
import { 
  registerValidation, 
  loginValidation, 
  handleValidation,
  sanitizeInput 
} from '../middleware/validation.js';

const router = express.Router();

// Inscription
router.post('/register', 
  registerValidation, 
  sanitizeInput, 
  handleValidation, 
  register
);

// Connexion
router.post('/login', 
  loginValidation, 
  sanitizeInput, 
  handleValidation, 
  login
);

// Profil (protégé)
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);

// Liste des utilisateurs (protégé)
router.get('/users', protect, getUsers);

export default router;