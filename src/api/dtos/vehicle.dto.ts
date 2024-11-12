import { IsNotEmpty, IsString, Matches } from 'class-validator';

const PLACA_REGEX = /^[A-Z]{3}\d{1}[A-Z]{1}\d{2}$/;
const CHASSI_REGEX = /^[A-HJ-NPR-Z0-9]{17}$/;
const RENAVAM_REGEX = /^\d{11}$/;

export class VehicleDTO {
  @IsNotEmpty({ message: "Placa precisa ser informada." })
  @IsString()
  @Matches(PLACA_REGEX)
  placa: string;

  @IsNotEmpty({ message: "Chassi precisa ser informada." })
  @IsString()
  @Matches(CHASSI_REGEX)
  chassi: string;

  @IsNotEmpty({ message: "Renavam precisa ser informada." })
  @IsString()
  @Matches(RENAVAM_REGEX)
  renavam: string;

  @IsNotEmpty({ message: "Modelo precisa ser informado." })
  @IsString()
  modelo: string;

  @IsNotEmpty({ message: "Marca precisa ser informada." })
  @IsString()
  marca: string;

  @IsString()
  ano: string;
}
