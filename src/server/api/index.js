// Dependencies
import express from 'express';
// Data
import posts from './data/posts';

//Express Router
const router = express.Router();

router.get('/blog/posts', (req, res) => res.json(posts));

export default router;
