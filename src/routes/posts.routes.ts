import { Router } from 'express';
import { getPost } from '../db.js';
import type { Post } from '../types/post.js';

const router: Router = Router()

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const post: Post = await getPost(id)
  const decodedContent = atob(post.content)
  console.log(post)
  res.render("post", {
    post, decodedContent
  })
})

export default router