const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.update(
            {
                title: req.body.title,
                comment: req.body.comment
            },
            {
                where: { id: req.params.id }
            }
        );

        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;