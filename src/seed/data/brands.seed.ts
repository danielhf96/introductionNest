import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'Brand A',
        cratedAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Brand B',
        cratedAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Brand C',
        cratedAt: new Date().getTime(),
    }
];