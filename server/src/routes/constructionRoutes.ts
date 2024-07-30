import { Router } from "express";
import { ConstructionController } from "../controller/constructionController";

export class ConstructionRoute {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  getRoutes() {
    const constructionController = new ConstructionController();
    this.router.get("/", constructionController.show);
    return this.router;
  }
}
