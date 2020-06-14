import Router from "koa-router";
import { readfile } from "./service";
import path from "path";

const router = (app) => {
  const handle = app.getRequestHandler();
  const router: any = new Router();

  router.get("/", async (ctx) => {
    ctx.body = "hello 😄";
  });

  router.get("/getDir", async (ctx) => {
    const arr = readfile(path.resolve(__dirname, "../client"));
    ctx.response.body = {
      data: arr,
      code: 200,
      message: true,
    };
  });

  router.get("*", async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  return router;
};

export default router;
