const router = require('express').Router();

const {Rating} = require('../../models/');


router.post('/', async (req, res) => {
  try {
    const RatingData = await Rating.create({
      rating_comment: req.body.rating_comment,
      rating_score: req.body.rating_score,
      user_id: req.body.user_id,
      recipe_id: req.body.recipe_id
      

    });
    res.status(200).json(RatingData);
  } catch (err) {
   console.log(err)
    res.status(400).json({Status: "Couldn't post"})
  }
});

module.exports = router;
