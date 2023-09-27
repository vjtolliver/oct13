const router = require('express').Router();
const { Guest } = require('../models');

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
});

router.get('/rsvp', async (req, res) => {
    try {
        const gstData = await Guest.findAll({
            order: [['name', 'ASC']]
        });

        const manyGuest = gstData.map((guest) => guest.get({ plain: true }));

        res.render('rsvp', { manyGuest });

    } catch (err) {
    res.status(400).json(err);
    console.log("its the html route")
    }

});

router.get('/accomodations', function(req, res) {
    res.render('accom', { title: "Weekend Accomodations"});
});

router.get('/bingo', function(req, res) {
    res.render('bingo', { title: "Bingo Card Payment"});
});

router.get('/explore', function(req, res) {
    res.render('explore', { title: "Explore"});
});

router.get('/lineup', function(req, res) {
    res.render('lineup', { title: "Weekend Lineup"});
});

// app.get('/rsvp', function(req, res) {
//     res.render('rsvp', { title: "RSVP"});
// });

router.get('/spotify', function(req, res) {
    res.render('spotify', { title: "Weekend Spotify Playlist"});
});

router.get('/weather', function(req, res) {
    res.render('weather', { title: "Weather"});
});

module.exports = router;