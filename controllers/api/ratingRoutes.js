const router = require('express').Router();
const { Rating } = require('../../models');


router.post('/', async (req, res) => {
  try {
    const RatingData = await Rating.create({
      rating_comment: req.body.rating_comment,
      rating_score: req.body.rating_score,
      

    });
    res.status(200).json(RatingData);
  } catch (err) {
    res.status(400).json(err);
    res.status(400).json({Status: "Couldn't post"})
  }
});

module.exports = router;
