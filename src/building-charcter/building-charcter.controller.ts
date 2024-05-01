import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildingCharcterService } from './building-charcter.service';
import { CreateBuildingCharcterDto } from './dto/create-building-charcter.dto';
import { UpdateBuildingCharcterDto } from './dto/update-building-charcter.dto';

@Controller('building-charcter')
export class BuildingCharcterController {
  constructor(private readonly buildingCharcterService: BuildingCharcterService) {}

  @Post()
  create(@Body() createBuildingCharcterDto: CreateBuildingCharcterDto) {
    return this.buildingCharcterService.create(createBuildingCharcterDto);
  }

  @Get()
  findAll() {
    return this.buildingCharcterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingCharcterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildingCharcterDto: UpdateBuildingCharcterDto) {
    return this.buildingCharcterService.update(+id, updateBuildingCharcterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingCharcterService.remove(+id);
  }
}
