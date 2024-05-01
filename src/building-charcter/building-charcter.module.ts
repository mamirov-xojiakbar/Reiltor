import { Module } from '@nestjs/common';
import { BuildingCharcterService } from './building-charcter.service';
import { BuildingCharcterController } from './building-charcter.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BuildingCharcterController],
  providers: [BuildingCharcterService],
})
export class BuildingCharcterModule {}
