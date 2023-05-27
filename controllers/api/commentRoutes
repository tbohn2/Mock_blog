const router = require('express').Router();
const { Comments } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newComment = await Comments.create({
            ...req.body
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedComment = await Comments.update(
            {
                comment: req.body.comment
            },
            {
                where: { id: req.params.id }
            }
        );

        res.status(200).json(updatedComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleteComment = await Comments.destroy(
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).json(deleteComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;