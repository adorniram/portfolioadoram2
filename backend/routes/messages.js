import express from 'express';
import { 
  sendMessage, 
  getInbox, 
  getSent, 
  getConversation,
  markAsRead, 
  deleteMessage,
  getUnreadCount 
} from '../controllers/messageController.js';
import { protect } from '../middleware/auth.js';
import { 
  messageValidation, 
  handleValidation,
  sanitizeInput 
} from '../middleware/validation.js';

const router = express.Router();

// Toutes les routes nécessitent une authentification
router.use(protect);

// Envoyer un message
router.post('/', 
  messageValidation, 
  sanitizeInput, 
  handleValidation, 
  sendMessage
);

// Messages reçus
router.get('/inbox', getInbox);

// Messages envoyés
router.get('/sent', getSent);

// Conversation avec un utilisateur
router.get('/conversation/:userId', getConversation);

// Nombre de messages non lus
router.get('/unread/count', getUnreadCount);

// Marquer comme lu
router.patch('/:id/read', markAsRead);

// Supprimer un message
router.delete('/:id', deleteMessage);

export default router;