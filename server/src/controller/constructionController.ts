import { ConstructionService } from "../services/constructionService";
import { Request, Response } from "express";
import { IConstruction } from "../types/constructionType";

export class ConstructionController {
  async create(req: Request, res: Response) {
    try {
      const data = req.body as IConstruction;
      const constructionService = new ConstructionService();
      const constructions = await constructionService.createConstruction(data);
      res.status(200).send(constructions);
    } catch (error) {
      const err = error as Error;
      res.status(500).send(err.message);
    }
  }

  async show(req: Request, res: Response) {
    try {
      const constructionService = new ConstructionService();
      const constructions = await constructionService.showConstructions();
      res.status(200).send(constructions);
    } catch (error) {
      const err = error as Error;
      res.status(500).send(err.message);
    }
  }
}
