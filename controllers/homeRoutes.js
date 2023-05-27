const router = require('express').Router();
const { Post, User, Comments } = require('../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
          model: Comments,
          attributes: ['comment', 'user_id'],
        },
      ],
    });
    res.json(postData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:user_id', async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.params.user_id },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    res.json(postData)
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
