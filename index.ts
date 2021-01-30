import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello World!";
})

app.use(router.routes());

const port = 8000
console.log("Server running on port: " + port)
await app.listen({ port: port });