const router = require('express').Router();
const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipeRoutes');
const ratingRoutes = require('./ratingRoutes');

const photoRoutes = require('./photoRoutes')

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/ratings', ratingRoutes);
router.use('/upload', photoRoutes)

module.exports = router;