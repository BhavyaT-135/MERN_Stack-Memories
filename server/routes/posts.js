import express from 'express';

const router = express.Router();

//Reached by going to localhost:5000/posts
router.get('/', (req, res) => {
    res.send('THIS WORKS!');
})

export default router;