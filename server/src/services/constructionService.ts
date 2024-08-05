import { PrismaClient } from "@prisma/client";
import { IConstruction } from "../types/constructionType";

export class ConstructionService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async showConstructions() {
    const constructions = await this.prisma.construction.findMany();
    return constructions;
  }

  async showOneConstruction(data: IConstruction) {
    const construction = await this.prisma.construction.findUnique({
     where: {
      id: data.id,
     },
    });
    return construction;
  }

  async createConstruction(data: IConstruction) {
    const construction = await this.prisma.construction.create({
      data: {
        name: data.name,
        description: data.description,
        startedDate: data.startedDate,
        endedDate: data.endedDate,
        status: data.status,
        techManager: data.techManager,
      },
    });
    return construction;
  }

  async deleteConstruction(data: IConstruction) {
    const construction = await this.prisma.construction.delete({
      where: {
        id: data.id,
      },
    });
    return construction;
  }
}
