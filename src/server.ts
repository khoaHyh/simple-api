import http from "http";
import express, { NextFunction, Request, Response } from "express";
import helloWorldRouter from "./routes/hello_world_routes";

const app = express();

// Handle incoming request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount routes
app.use("/api", helloWorldRouter);

// Global error handler
app.use((err: Error, _: Request, res: Response, __: NextFunction): void => {
  console.error(err);
  res.status(500).send({ error: `${err}` });
});

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 8080;
httpServer.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
