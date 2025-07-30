import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
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
    getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
        return this.carsService.findById(id);
    }

    @Post()
    createCar(@Body() carData: any) {
        return { method: 'POST', data: carData }
    }

    @Patch(':id')
    updateCar(@Param('id', ParseIntPipe) id: number, @Body() carData: any) {
        return { method: 'PATCH', id, data: carData }
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        return { method: 'DELETE', id };
    }
}
