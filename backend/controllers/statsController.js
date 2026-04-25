import Visit from '../models/Visit.js';

// @desc    Enregistrer une visite
// @route   POST /api/stats/visit
// @access  Public
export const recordVisit = async (req, res) => {
  try {
    const { sessionId, page } = req.body;
    
    // Récupérer l'IP du client
    const ip = req.ip || 
               req.headers['x-forwarded-for']?.split(',')[0] || 
               req.connection?.remoteAddress || 
               'unknown';

    const userAgent = req.headers['user-agent'] || '';

    const visit = await Visit.create({
      ip,
      userAgent,
      page: page || req.originalUrl,
      sessionId: sessionId || ''
    });

    res.status(201).json({ success: true });
  } catch (error) {
    // Ne pas bloquer le site si l'enregistrement échoue
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// @desc    Obtenir les statistiques
// @route   GET /api/stats
// @access  Private
export const getStats = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const last7Days = new Date(today);
    last7Days.setDate(last7Days.getDate() - 7);

    // Total des visites
    const totalVisits = await Visit.countDocuments();

    // Visiteurs uniques (basé sur IP)
    const uniqueVisitors = await Visit.distinct('ip');

    // Visites aujourd'hui
    const todayVisits = await Visit.countDocuments({
      createdAt: { $gte: today }
    });

    // Visites hier
    const yesterdayVisits = await Visit.countDocuments({
      createdAt: { $gte: yesterday, $lt: today }
    });

    // Visites par jour pour les 7 derniers jours
    const viewsByDay = await Visit.aggregate([
      {
        $match: {
          createdAt: { $gte: last7Days }
        }
      },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$createdAt' }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    // Pages les plus visitées
    const topPages = await Visit.aggregate([
      {
        $group: {
          _id: '$page',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    res.json({
      totalVisits,
      uniqueVisitors: uniqueVisitors.length,
      todayVisits,
      yesterdayVisits,
      viewsByDay: viewsByDay.map(v => ({ date: v._id, count: v.count })),
      topPages: topPages.map(p => ({ page: p._id, count: p.count }))
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// @desc    Statistiques détaillées par période
// @route   GET /api/stats/detailed
// @access  Private
export const getDetailedStats = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    
    const start = startDate ? new Date(startDate) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const end = endDate ? new Date(endDate) : new Date();

    const visits = await Visit.find({
      createdAt: { $gte: start, $lte: end }
    }).sort({ createdAt: -1 });

    res.json(visits);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};