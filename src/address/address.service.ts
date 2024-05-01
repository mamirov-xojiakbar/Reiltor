import { Injectable } from '@nestjs/common';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Address } from '.prisma/client';
import { CreateAddressDto } from './dto/create-address.dto';

@Injectable()
export class AddressService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    return this.prismaService.address.create({
      data: createAddressDto,
    });
  }

  async findAll(): Promise<Address[]> {
    return this.prismaService.address.findMany();
  }

  async findOne(id: number): Promise<Address> {
    return this.prismaService.address.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateAddressDto: UpdateAddressDto,
  ): Promise<Address> {
    return this.prismaService.address.update({
      where: { id },
      data: updateAddressDto,
    });
  }

  async remove(id: number): Promise<Address> {
    return this.prismaService.address.delete({
      where: { id },
    });
  }
}
