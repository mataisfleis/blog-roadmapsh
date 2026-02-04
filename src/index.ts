import express from 'express';
import { create } from 'express-handlebars';
import type {Application} from 'express'
import 'dotenv/config'

import indexRouter from './routes/index.routes.js'
import adminRouter from './routes/admin.routes.js'
import postsRouter from './routes/posts.routes.js'
import { join } from 'node:path';
import { authMiddleware } from './middlewares/auth.js';

const app: Application = express();

const port = process.env.PORT || 3000;

const hbs = create({
  helpers: {
    formatDate: (date: number) =>{
      const dateConstructor = new Date(date)
      return `${dateConstructor.getDate()}/${dateConstructor.getMonth() + 1}/${dateConstructor.getFullYear()}`
    }  
  }
})

app.engine("handlebars", hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', join('views'))

app.use('/', indexRouter)
app.use('/admin', authMiddleware, adminRouter)
app.use('/posts', postsRouter)

app.listen(port, () => {
console.log(`Server started at port: ${port}`);
});

export default app;