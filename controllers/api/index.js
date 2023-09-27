const router = require('express').Router();
const rsvpRoutes = require('./rsvpRoutes');

router.use('/pleasework', rsvpRoutes);

module.exports = router;