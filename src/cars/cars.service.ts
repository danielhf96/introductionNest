import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    public cars = [
        {
            id: 1,
            make: 'Mazda',
            model: 'CX-5',
            year: 2020
        },
        {
            id: 2,
            make: 'Honda',
            model: 'Civic',
            year: 2019
        },
        {
            id: 3,
            make: 'Ferrari',
            model: '488 GTB',
            year: 2018
        }
    ];

    findAll() {
        return this.cars;
    }

    findById(id: number) {
        return this.cars.find(car => car.id === id);
    }
}
