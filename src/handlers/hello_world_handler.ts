import { Request, Response } from "express";

// Turn async if needed
export function getHelloWorld(req: Request, res: Response): void {
  console.log("hello world");
  res.json({
    message: "hello world",
  });
}
