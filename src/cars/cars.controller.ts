import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private carsService: CarsService
    ) { }

    @Get()
    getAll() {
        return this.carsService.cars;
    }

    @Get(':id')
    getCarById(@Param('id') id: string) {
        const carId = parseInt(id);
        const car = this.carsService.findById(carId);
        if (car) {
            return car;
        } else {
            return { 'Error': 'Not found' };
        }
    }
}
