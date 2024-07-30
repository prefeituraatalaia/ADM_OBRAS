import { Router } from "express";
import { ConstructionRoute } from "./constructionRoutes";

export class AllRoutes {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  getRoutes() {
    const constructionRoute = new ConstructionRoute();
    this.router.use("/construction", constructionRoute.getRoutes());
    return this.router;
  }
}
