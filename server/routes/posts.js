import express from 'express';
import {getPosts} from '../controllers/posts.js';

const router = express.Router();

//Reached by going to localhost:5000/posts
router.get('/', getPosts);

export default router;