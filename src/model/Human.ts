export default class Human {
    private id: number = 0;
    private name!: string;
    private age: number = 0;

    constructor(name?: string, age?: number, id: number = 0) {
        name ? (this.name = name) : name;
        age ? (this.age = age) : age;
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
}
