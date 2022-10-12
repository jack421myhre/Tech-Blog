const router = require('express').Router();
const { User, Post, Comment } = require('../models');


// /dashboard

router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.findAll({});
        const userPosts = allPosts.map((post) => post.get({ plain: true }));

        res.render('all-posts-admin', { layout: 'dashboard', userPosts });


    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
