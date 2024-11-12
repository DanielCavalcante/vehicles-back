import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { VehicleDTO } from './vehicle.dto';

export class UpdateVehicleDTO extends PickType(VehicleDTO, 
  ['placa', 'chassi', 'renavam', 'marca', 'modelo', 'ano'] as const) {

  @IsNotEmpty({ message: "O id precisa ser informado." })
  @IsNumber()
  @ApiProperty()
  id: number;

}
