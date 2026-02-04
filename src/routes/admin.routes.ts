import { Router } from 'express';
import { createPost, getPosts } from '../db.js';
import type { Post } from '../types/post.js';

const router: Router = Router()

router.get('/', async (req, res) => {
  const posts: Post[] = await getPosts()
    
  res.render('admin', {
    posts
  })
})

router.get('/new', async (req, res) => {
    
  res.render('newPost', )
})

router.post('/new/post', async (req, res) => {
  const {title, content} = req.body
  const newPost = createPost(title, content)

  res.redirect('/admin')
})

export default router