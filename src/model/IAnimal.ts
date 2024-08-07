export default interface IAnimal {
    id: number;
    name: string;
    age: number;
    breed: string;
    weight: number;

    makeNoise(): void;

    bite(): void;
}
