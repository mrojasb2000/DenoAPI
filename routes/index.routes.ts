import { Router } from "https://deno.land/x/oak/mod.ts";
import * as userService from '../services/index.services.ts'

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Welcome to my API";
})

router.get("/users", userService.getUsers)
router.get("/users/:id", userService.getUser)
router.post("/users", userService.createUsers)

export default router