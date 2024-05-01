import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { PrismaService } from '../prisma/prisma.service';
import { District } from '.prisma/client'; // Assuming your Prisma model is named 'District'

@Injectable()
export class DistrictService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDistrictDto: CreateDistrictDto): Promise<District> {
    return this.prismaService.district.create({
      data: createDistrictDto,
    });
  }

  async findAll(): Promise<District[]> {
    return this.prismaService.district.findMany();
  }

  async findOne(id: number): Promise<District> {
    return this.prismaService.district.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateDistrictDto: UpdateDistrictDto,
  ): Promise<District> {
    return this.prismaService.district.update({
      where: { id },
      data: updateDistrictDto,
    });
  }

  async remove(id: number): Promise<District> {
    return this.prismaService.district.delete({
      where: { id },
    });
  }
}
