export default class Human {
    private id: number = 0;
    private name: string = '';
    private age: number = 0;

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

    private getAge(): number {
        return this.age;
    }
    private setAge(age: number): void {
        this.age = age;
    }
}
