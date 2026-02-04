import { Router } from 'express';
import { getPosts } from '../db.js';
import type { Post } from '../types/post.js';

const router: Router = Router()

router.get('/', async (req, res) => {
  const posts: Post[] = await getPosts()
  
  res.render('index', {
    posts
  })
})

export default router