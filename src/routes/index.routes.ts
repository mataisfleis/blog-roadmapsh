import { Router } from 'express';

const router: Router = Router()

router.get('/', async (req, res) => {
  res.render('index')
})

export default router