import express, { Application } from "express";
// import { UserController } from "./src/controller/UserController";
// import { AllRoutes } from "./src/routes/AllRoutes";

export class Server {
  private app: Application;
  private porta: Number;

  constructor(porta: Number) {
    this.app = express();
    this.app.use(express.json());
    this.porta = porta;
    console.log(porta);
  }

  // router() {
  //   const allRoutes = new AllRoutes();
  //   this.app.use(allRoutes.getRoutes());
  // }

  listen() {
    this.app.listen(this.porta, () => {
      console.log("Server is running!");
    });
  }
}
