const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// /api/posts

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            body: req.body.body
        });




    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;