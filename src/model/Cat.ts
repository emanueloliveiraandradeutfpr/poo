import Animal from './IAnimal';

export default class Cat implements Animal {
    id: number;
    name: string;
    age: number;
    breed: string;
    weight: number;
    constructor(age: number, breed: string, id: number, name: string, weight: number) {
        this.bite();
        this.makeNoise();
        this.age = age;
        this.breed = breed;
        this.id = id;
        this.name = name;
        this.weight = weight;
    }

    makeNoise(): void {
        console.log('Miau Miau');
    }
    bite(): void {
        console.log('Arranhão');
    }
}
