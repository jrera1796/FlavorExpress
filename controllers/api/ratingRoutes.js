const router = require('express').Router();
// const withAuth = require('./utils/withAuth')
const { Rating, User } = require('../../models/');

router.get('/', (req, res) => {
  Rating.findAll({
    attributes: ['id', 'rating_comment', 'rating_score', 'recipe_id', 'created_at', 'updated_at'],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(ratingData => res.json(ratingData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
  Rating.findOne({
    attributes: ['id', 'rating_comment', 'rating_score', 'recipe_id', 'created_at', 'updated_at'],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(ratingData => res.json(ratingData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

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
    res.status(400).json({ Status: "Couldn't post" })
  }
});

router.delete('/:id', (req, res) => {
  Rating.destroy({
    where: { id: req.params.id }
  })
    .then(deleteRating => {
      res.json(deleteRating)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.put('/:id', (req, res) => {
  Rating.update({
    rating_comment: req.body.rating_comment,
    rating_score: req.body.rating_score
  },
    {
      where: { id: req.params.id }
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

module.exports = router;
