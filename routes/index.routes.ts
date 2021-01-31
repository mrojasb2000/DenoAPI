import { Router } from "https://deno.land/x/oak/mod.ts";
import * as userService from '../services/index.services.ts'

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Welcome to my API";
})

router
  .get("/users", userService.getUsers)
  .get("/users/:id", userService.getUser)
  .post("/users", userService.createUsers)
  .delete("/users/:id", userService.deleteUsers)
  .put("/users/:id", userService.updateUsers)


export default router