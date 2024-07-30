import { error } from "console";
import { Request, Response } from "express";

export class GenericController {
  async show(req: Request, res: Response) {
    throw new Error("Método SHOW não implementado!");
  }

  async create(req: Request, res: Response) {
    throw new Error("Método CREATE não implementado!");
  }

  async delete(req: Request, res: Response) {
    throw new Error("Método DELETE não implementado!");
  }
}
