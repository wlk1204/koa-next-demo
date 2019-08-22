import Koa from 'koa'
import next from 'next'
import router from './app/router'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './client' })

console.log('process.env.NODE_ENV ==>', process.env.NODE_ENV)

app.prepare().then(() => {
  const server = new Koa()

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router(app).routes())

  server.listen(port, () => {
    console.log(`=====> Ready on http://localhost:${port}`)
  })
})
