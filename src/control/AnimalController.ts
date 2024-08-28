import Datacenter from '../db/Datacenter';
import Animal from '../model/Animal';
import Cat from '../model/Cat';
import Dog from '../model/Dog';

export default class AnimalController {
    private datacenter: Datacenter = new Datacenter();

    public getNewDog(
        id: number,
        name: string,
        age: number,
        breed: string,
        weight: number,
    ): Dog {
        return new Dog(id, name, age, breed, weight);
    }
    public getNewCat(
        id: number,
        name: string,
        age: number,
        breed: string,
        weight: number,
    ): Cat {
        return new Cat(id, name, age, breed, weight);
    }

    listAllAnimals(): void {
        console.log(this.datacenter.animals);
    }

    registerAnimal<A extends Animal>(animal: A): void {
        this.datacenter.addNewAnimal(animal);
    }

    findMyAnimals(ids: number[]): void {
        ids?.forEach((id) => {
            let res = this.datacenter.animals.find((animal) => animal.getId() === id);

            console.log(res);
        });
    }
}
