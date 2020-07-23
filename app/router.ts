import Router from "koa-router";

const router = (app) => {
  const handle = app.getRequestHandler();
  const router: any = new Router();

  router.get("/", async (ctx) => {
    ctx.body = "hello 🐷";
  });

  router.get("/a", async (ctx) => {
    await app.render(ctx.req, ctx.res, "/a", ctx.query);
    ctx.respond = false;
  });

  router.get("/b", async (ctx) => {
    await app.render(ctx.req, ctx.res, "/b", ctx.query);
    ctx.respond = false;
  });

  router.get("*", async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  return router;
};

export default router;
