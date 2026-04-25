import express from 'express';
import { 
  recordVisit, 
  getStats, 
  getDetailedStats 
} from '../controllers/statsController.js';
import { protect, optionalAuth } from '../middleware/auth.js';

const router = express.Router();

// Enregistrer une visite (public - sans authentification)
router.post('/visit', recordVisit);

// Statistiques (protégé)
router.get('/', protect, getStats);

// Statistiques détaillées (protégé)
router.get('/detailed', protect, getDetailedStats);

export default router;