import { Request, Response } from "express";

// Turn async if needed
export async function getHelloWorld(_: Request, res: Response): Promise<void> {
  console.log("hello world");
  res.json({
    message: "hello world",
  });
}
