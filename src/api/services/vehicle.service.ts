import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from '../entities';
import { VehicleDTO } from '../dtos/vehicle.dto';
import { UpdateVehicleDTO } from '../dtos/update-vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly repository: Repository<Vehicle>,
  ) {}

  async findById(stringId: string): Promise<Vehicle> {
    const id = Number(stringId);
    const vehicle = await this.repository.findOne({
      where: { id },
    });
    return vehicle;
  }

  async findByPlacaChassiOrRenavam(placa: string, chassi: string, renavam: string): 
    Promise<Vehicle> {
    const vehicle = await this.repository.findOne({
      where: [
       { placa, chassi, renavam }
      ]
    });
    return vehicle;
  }

  async create(dto: VehicleDTO): Promise<Vehicle> {
    try {

      const vehicleExists = await this.findByPlacaChassiOrRenavam(dto.placa, dto.chassi, dto.renavam)
      if (vehicleExists) 
        throw new HttpException('Vehicle already exists!', HttpStatus.BAD_REQUEST);

      const vehicle = await this.repository.save(dto);

      return vehicle;
    } catch (e) {
      console.log(e);
    }
  }

  async find(): Promise<Vehicle[]> {
    const vehicles = await this.repository.find();
    return vehicles;
  }

  async delete(id: string): Promise<any> {
    const vehicle = await this.repository.delete(id);
    return vehicle;
  }

  async update(id: number, dto: UpdateVehicleDTO): Promise<any> {
    const vehicle = await this.repository.update(id, dto);
    console.log(vehicle)
    return vehicle;
  }
}
