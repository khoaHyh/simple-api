import { Router } from "express";
import { getHelloWorld } from "../handlers/hello_world_handler";

const router = Router();

router.get("/hello-world", getHelloWorld);

export default router;
