router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({ include: [{ model: User }] });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const singlePost = await Post.findByPk(req.params.id, {
            include: [{ model: User }],
        });

        if (!singlePost) {
            res.status(404).json({ message: 'No posts found with that ID.' });
            return;
        }

        res.status(200).json(singlePost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a new Post
router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create(req.body);
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const targetPost = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });
        console.log('Post was successfully removed.');
        if (!targetPost) {
            res.status(404).json({ message: 'No post found with that ID.' });
            return;
        }

        res.status(200).json(targetPost);
    } catch (err) {
        res.status(500).json(err);
    }
});