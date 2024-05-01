import { Injectable } from '@nestjs/common';
import { CreateBuildingCharcterDto } from './dto/create-building-charcter.dto';
import { UpdateBuildingCharcterDto } from './dto/update-building-charcter.dto';
import { PrismaService } from '../prisma/prisma.service';
import { BuildingCharacter } from '@prisma/client';
 // Assuming your Prisma model is named 'BuildingCharcter'

@Injectable()
export class BuildingCharcterService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    createBuildingCharcterDto: CreateBuildingCharcterDto,
  ): Promise<BuildingCharacter> {
    return this.prismaService.buildingCharacter.create({
      data: createBuildingCharcterDto,
    });
  }

  async findAll(): Promise<BuildingCharacter[]> {
    return this.prismaService.buildingCharacter.findMany();
  }

  async findOne(id: number): Promise<BuildingCharacter | null> {
    return this.prismaService.buildingCharacter.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateBuildingCharcterDto: UpdateBuildingCharcterDto,
  ): Promise<BuildingCharacter> {
    return this.prismaService.buildingCharacter.update({
      where: { id },
      data: updateBuildingCharcterDto,
    });
  }

  async remove(id: number): Promise<BuildingCharacter> {
    return this.prismaService.buildingCharacter.delete({
      where: { id },
    });
  }
}
