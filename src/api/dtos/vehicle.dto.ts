import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

const PLACA_REGEX = /^[A-Z]{3}\d{1}[A-Z]{1}\d{2}$/;
const CHASSI_REGEX = /^[A-HJ-NPR-Z0-9]{17}$/;
const RENAVAM_REGEX = /^\d{11}$/;

export class VehicleDTO {
  @ApiProperty()
  @IsNotEmpty({ message: "Placa precisa ser informada." })
  @IsString()
  @Matches(PLACA_REGEX)
  placa: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Chassi precisa ser informada." })
  @IsString()
  @Matches(CHASSI_REGEX)
  chassi: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Renavam precisa ser informada." })
  @IsString()
  @Matches(RENAVAM_REGEX)
  renavam: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Modelo precisa ser informado." })
  @IsString()
  modelo: string;

  @ApiProperty()
  @IsNotEmpty({ message: "Marca precisa ser informada." })
  @IsString()
  marca: string;

  @ApiProperty()
  @IsString()
  ano: string;
}
