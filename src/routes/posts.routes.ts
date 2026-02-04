import { Router } from 'express';
import { getPost } from '../db.js';
import showdown from 'showdown'
import type { Post } from '../types/post.js';

const router: Router = Router()

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const post: Post = await getPost(id)
  const decodedContent = atob(post.content)
  const converter = new showdown.Converter()
  const parsedContent = converter.makeHtml(decodedContent)
  res.render("post", {
    post, decodedContent: parsedContent
  })
})

export default router