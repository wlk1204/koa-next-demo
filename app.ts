import Koa from 'koa'
import next from 'next'
import Router from 'koa-router'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './client' })
const handle = app.getRequestHandler()

console.log('process.env.NODE_ENV ==>', process.env.NODE_ENV)

app.prepare().then(() => {
  const server = new Koa()
  const router: any = new Router()

  router.get('/a', async ctx => {
    await app.render(ctx.req, ctx.res, '/a', ctx.query)
    ctx.respond = false
  })

  router.get('/b', async ctx => {
    await app.render(ctx.req, ctx.res, '/b', ctx.query)
    ctx.respond = false
  })

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())

  server.listen(port, () => {
    console.log(`=====> Ready on http://localhost:${port}`)
  })
})
