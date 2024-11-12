import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpStatus,
  Res,
  Delete,
  Put
} from '@nestjs/common';
import { Response } from 'express';
import { VehicleService } from '../services';
import { VehicleDTO } from '../dtos/vehicle.dto';
import { UpdateVehicleDTO } from '../dtos/update-vehicle.dto';

@Controller('v1/vehicles')
export class VehicleController {
  constructor(private readonly service: VehicleService) {}

  @Get('/:id')
  async findById(@Param('id') id) {
    try {
      return await this.service.findById(id);
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Get('')
  async find() {
    try {
      return await this.service.find();
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Post()
  async create(@Res() response: Response, @Body() body: VehicleDTO) {
    try {
      const vehicle = await this.service.create(body);

      response.status(HttpStatus.CREATED).send(vehicle);
    } catch (e) {
      return HttpStatus.BAD_REQUEST;
    }
  }

  @Delete('/:id')
  async delete(@Param('id') id) {
    try {
      return await this.service.delete(id);
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  
  }
  @Put('/:id')
  async update(@Param('id') id, @Body() dto: UpdateVehicleDTO) {
    try {
      console.log(dto)
      return await this.service.update(id, dto);
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }
}
