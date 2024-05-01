import { PartialType } from '@nestjs/swagger';
import { CreateBuildingCharcterDto } from './create-building-charcter.dto';

export class UpdateBuildingCharcterDto extends PartialType(CreateBuildingCharcterDto) {}
