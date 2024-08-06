import { Genre } from './Enum';

export default class Human {
    private id: number = 0;
    private name!: string;
    private age: number = 0;
    private genre: Genre = Genre.Male;

    constructor(name: string, age: number, id: number, genre: Genre) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.genre = genre;
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

    public getGenre(): Genre {
        return this.genre;
    }

    public setGenre(genre: Genre): void {
        this.genre = genre;
    }
}
