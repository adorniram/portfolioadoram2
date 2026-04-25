import Message from '../models/Message.js';
import User from '../models/User.js';

// @desc    Envoyer un message
// @route   POST /api/messages
// @access  Private
export const sendMessage = async (req, res) => {
  try {
    const { recipientId, content } = req.body;

    // Vérifier que le destinataire existe
    const recipient = await User.findById(recipientId);
    if (!recipient) {
      return res.status(404).json({ error: 'Destinataire non trouvé' });
    }

    // Ne pas s'envoyer de message à soi-même
    if (recipientId === req.user._id.toString()) {
      return res.status(400).json({ error: 'Vous ne pouvez pas vous envoyer un message à vous-même' });
    }

    const message = await Message.create({
      sender: req.user._id,
      recipient: recipientId,
      content
    });

    // Populate pour la réponse
    const populatedMessage = await Message.findById(message._id)
      .populate('sender', 'username email')
      .populate('recipient', 'username email');

    res.status(201).json(populatedMessage);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// @desc    Obtenir les messages reçus
// @route   GET /api/messages/inbox
// @access  Private
export const getInbox = async (req, res) => {
  try {
    const messages = await Message.find({ recipient: req.user._id })
      .populate('sender', 'username email avatar')
      .sort({ createdAt: -1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// @desc    Obtenir les messages envoyés
// @route   GET /api/messages/sent
// @access  Private
export const getSent = async (req, res) => {
  try {
    const messages = await Message.find({ sender: req.user._id })
      .populate('recipient', 'username email avatar')
      .sort({ createdAt: -1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// @desc    Obtenir une conversation avec un utilisateur
// @route   GET /api/messages/conversation/:userId
// @access  Private
export const getConversation = async (req, res) => {
  try {
    const { userId } = req.params;

    const messages = await Message.find({
      $or: [
        { sender: req.user._id, recipient: userId },
        { sender: userId, recipient: req.user._id }
      ]
    })
      .populate('sender', 'username email avatar')
      .populate('recipient', 'username email avatar')
      .sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// @desc    Marquer un message comme lu
// @route   PATCH /api/messages/:id/read
// @access  Private
export const markAsRead = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({ error: 'Message non trouvé' });
    }

    // Vérifier que l'utilisateur est le destinataire
    if (message.recipient.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'Non autorisé' });
    }

    message.isRead = true;
    await message.save();

    res.json(message);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// @desc    Supprimer un message
// @route   DELETE /api/messages/:id
// @access  Private
export const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({ error: 'Message non trouvé' });
    }

    // Seul l'expéditeur ou le destinataire peut supprimer
    if (message.sender.toString() !== req.user._id.toString() && 
        message.recipient.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'Non autorisé' });
    }

    await message.deleteOne();
    res.json({ message: 'Message supprimé' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// @desc    Nombre de messages non lus
// @route   GET /api/messages/unread/count
// @access  Private
export const getUnreadCount = async (req, res) => {
  try {
    const count = await Message.countDocuments({
      recipient: req.user._id,
      isRead: false
    });

    res.json({ unread: count });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};