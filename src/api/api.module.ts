import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './entities';
import { VehicleService } from './services';
import { VehicleController } from './controllers';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle])],
  providers: [VehicleService],
  controllers: [VehicleController],
})
export class ApiModule {}
