const router = require('express').Router();

const apiRoutes = require('./api');

//const rsvpRoutes = require('./rsvpRoutes');

const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
//router.use('/rsvp', rsvpRoutes);
router.use('/', homeRoutes);


module.exports = router;