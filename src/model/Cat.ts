import Animal from './Animal';

export default class Cat extends Animal {
    id!: number;

    constructor(id: number, name: string, age: number, breed: string, weight: number) {
        super(name, age, breed, weight);
        this.id = id;
    }
    getId(): number {
        return this.id;
    }
    setId(id: number): void {
        this.id = id;
    }
    public makeNoise(): void {
        console.log('Miau Miau');
    }
    public bite(): void {
        console.log('Mordiscando');
    }
}
