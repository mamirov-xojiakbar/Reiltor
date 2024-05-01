import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsOptional()
  @IsInt()
  regionId?: number;

  @IsOptional()
  @IsInt()
  districtId?: number;

  @IsOptional()
  @IsInt()
  areaId?: number;

  @IsOptional()
  @IsInt()
  mahallaId?: number;

  @IsOptional()
  @IsInt()
  streetId?: number;

  @IsInt()
  house_number: number;

  @IsInt()
  apartment_number: number;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsBoolean()
  landmark: boolean;

  @IsOptional()
  @IsInt()
  metroId?: number;

  @IsOptional()
  @IsString()
  location_description?: string;
}
