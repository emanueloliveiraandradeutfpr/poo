export default abstract class Human {
    private id!: number;
    private name!: string;
    private age!: number;

    constructor(name: string, age: number, id: number) {
        this.name = name;
        this.age = age;
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }
    public setId(id: number): void {
        this.id = id;
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

    abstract sayHello(): void;
}
