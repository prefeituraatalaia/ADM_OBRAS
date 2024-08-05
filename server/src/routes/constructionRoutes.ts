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
    this.router.post("/", constructionController.create);
    this.router.get("/show", constructionController.showById);
    this.router.delete("/delete", constructionController.deleteById);
    return this.router;
  }
}
