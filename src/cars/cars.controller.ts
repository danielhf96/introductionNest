import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars = ['Mazda', 'Honda', 'Ferrari'];

    @Get()
    getAll() {
        return this.cars;
    }

    @Get(':id')
    getCarById(@Param('id') id: string) {
        if(typeof this.cars[id] != 'undefined'){
            return this.cars[id];
        }else{
            return { 'Error': 'Not found'};
        }
    }
}
