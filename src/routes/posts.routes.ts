import { Router } from 'express';

const router: Router = Router()

router.get('/', async (req, res) => {
  res.send("hello world from posts")
})

export default router