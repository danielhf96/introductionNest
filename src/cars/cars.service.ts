import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {

    public cars: Car[] = [
        {
            id: uuid(),
            brand: 'Mazda',
            model: 'CX-5'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Ferrari',
            model: '488 GTB'
        }
    ];

    findAll() {
        return this.cars;
    }

    findById(id: string) {
        const car = this.cars.find(car => car.id === id);
        //? Uso Generico: throw new NotFoundException();
        if (!car) throw new NotFoundException(`Car with ID ${id} not found`);
        return car;
    }
}
