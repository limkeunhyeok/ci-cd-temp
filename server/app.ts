import express, { Router } from "express";

export default class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
  }

  public listen() {
    this.app.listen(80, () => {
      console.log(`Example app listening on the port 80`);
      console.log(`test1`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.get("/", (req, res) => res.send("ok"));
  }
}