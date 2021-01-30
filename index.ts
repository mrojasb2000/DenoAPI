import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import router from './routes/index.routes.ts'

const app = new Application();

app.use(router.routes());

const port = 8000
console.log("Server running on port: ", port)
await app.listen({ port: port });