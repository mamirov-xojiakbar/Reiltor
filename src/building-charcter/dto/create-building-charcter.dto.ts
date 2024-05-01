import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateBuildingCharcterDto {
  @IsOptional()
  @IsInt()
  buildingConditionId?: number;

  @IsOptional()
  @IsInt()
  buildingSeriaId?: number;

  @IsNotEmpty()
  @IsString()
  building_year: string;

  @IsOptional()
  @IsInt()
  wallMaterialId?: number;

  @IsOptional()
  @IsInt()
  overlapsId?: number;

  @IsOptional()
  @IsInt()
  waterSupplyId?: number;

  @IsOptional()
  @IsInt()
  heatingSystemId?: number;

  @IsBoolean()
  is_gas: boolean;

  @IsBoolean()
  is_electric: boolean;

  @IsInt()
  @Min(0)
  passenger_elevators_count: number;

  @IsInt()
  @Min(0)
  freight_elevators_count: number;

  @IsBoolean()
  is_building_security: boolean;

  @IsOptional()
  @IsInt()
  parkingId?: number;

  @IsBoolean()
  is_demolition_planned: boolean;
}
