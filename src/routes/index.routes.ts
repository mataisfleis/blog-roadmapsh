import { Router } from 'express';

const router: Router = Router()

router.get('/', async (req, res) => {
  res.send("hello world from index")
})

export default router