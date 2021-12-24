const router = require('express').Router();
const ratingRoutes = require('./ratingRoutes');

router.use('/rating', ratingRoutes);




module.exports = router;
