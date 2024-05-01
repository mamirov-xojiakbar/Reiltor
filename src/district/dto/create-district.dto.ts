import { Type } from "class-transformer";
import { IsArray, IsInt, IsOptional, IsString } from "class-validator";
import { CreateAddressDto } from "../../address/dto/create-address.dto";

export class CreateDistrictDto {
  @IsString()
  name: string;

  @IsArray()
  @Type(() => CreateAddressDto)
  @IsOptional()
  addressId?: CreateAddressDto[];

  @IsInt()
  @IsOptional()
  regionId?: number;
}
