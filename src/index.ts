import express from 'express';
import { engine } from 'express-handlebars';
import type {Application} from 'express'
import 'dotenv/config'

import indexRouter from './routes/index.routes.js'
import adminRouter from './routes/admin.routes.js'
import postsRouter from './routes/posts.routes.js'
import { join } from 'node:path';

const app: Application = express();

const port = process.env.PORT || 3000;

app.engine("handlebars", engine())
app.set('view engine', 'handlebars')
app.set('views', join('views'))

app.use('/', indexRouter)
app.use('/admin', adminRouter)
app.use('/posts', postsRouter)

app.listen(port, () => {
console.log(`Server started at port: ${port}`);
});

export default app;