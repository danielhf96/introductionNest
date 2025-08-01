import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { UpdateCarDto, CreateCarDto } from './dto';

@Injectable()
export class CarsService {

    public cars: Car[] = [];

    findAll() {
        return this.cars;
    }

    findById(id: string) {
        const car = this.cars.find(car => car.id === id);
        //? Uso Generico: throw new NotFoundException();
        if (!car) throw new NotFoundException(`Car with ID ${id} not found`);
        return car;
    }


    createCar(createCarDto: CreateCarDto) {
        let car: Car = {
            id: uuid(),
            ...createCarDto
        };
        this.cars.push(car);
        return car;
    }


    updateCar(id: string, updateCardDto: UpdateCarDto) {
        let carDB = this.findById(id);
        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = {
                    ...carDB,
                    ...updateCardDto,
                    id // Protección para no perder el ID original
                };
                return carDB;
            }
            return car;
        });
        return carDB;
    }

    deleteCar(id: string) {
        const car = this.findById(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }

    fillCarsWithSeedData(cars: Car[]) {
        this.cars = cars;
    }
}
