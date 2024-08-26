export default class Animal {
    private name: string = '';
    private age: number = 0;
    private breed: string = '';
    private weight: number = 0;

    constructor(name: string, age: number, breed: string, weight: number) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.weight = weight;
    }

    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }
    public setAge(age: number): void {
        this.age = age;
    }

    public getBreed(): string {
        return this.breed;
    }
    public setBreed(breed: string): void {
        this.breed = breed;
        0;
    }

    public getWeight(): number {
        return this.weight;
    }
    public setWeight(weight: number): void {
        this.weight = weight;
    }

    public makeNoise(): void {
        console.log('');
    }

    public bite(): void {
        console.log('');
    }
}
