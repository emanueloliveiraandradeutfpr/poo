import Animal from './Animal';

export default class Dog extends Animal {
    private dogId!: number;
    constructor(id: number, name: string, age: number, breed: string, weight: number) {
        super(name, age, breed, weight);
        this.dogId = id;
    }

    getDogID(): number {
        return this.dogId;
    }
    setDogID(id: number): void {
        this.dogId = id;
    }

    public makeNoise(): void {
        console.log('Au Au!');
    }
    public bite(): void {
        console.log('Mordendo');
    }
}
