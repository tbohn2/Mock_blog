const router = require('express').Router();
const { Post, User, Comments } = require('../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username']
        },
        // {
        //   model: Comments,
        //   attributes: ['comment'],
        //   include: [{
        //     model: User,
        //     attributes: ['username']
        //   }]
        // },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in
    });

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

router.get('/dashboard', async (req, res) => {
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
