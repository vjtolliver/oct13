const router = require('express').Router();
const { Guest } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newGuest = await Guest.create(
         {
         name: req.body.gname,
         status: req.body.gstStatus,
       });
  
      if (!newGuest) {
        return res
          .status(400)
          .json({ message: "Failed to create Guest Entry. Please try again." });
      }
  
      res.status(200).json(newGuest);
    } catch (err) {
      res.status(400).json(err);
      console.log("its the api");
    }
  });

  router.get('/', async (req, res) => {
    try {
      const allGsts = await Guest.findAll();

      res.status(200).json(allGsts);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;