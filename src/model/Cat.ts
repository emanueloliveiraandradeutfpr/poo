import Animal from './Animal';

export default class Cat extends Animal {
    private catId!: number;

    constructor(id: number, name: string, age: number, breed: string, weight: number) {
        super(name, age, breed, weight);
        this.catId = id;
    }
    getDogID(): number {
        return this.catId;
    }
    setDogID(id: number): void {
        this.catId = id;
    }
    public makeNoise(): void {
        console.log('Miau Miau');
    }
    public bite(): void {
        console.log('Mordiscando');
    }
}
