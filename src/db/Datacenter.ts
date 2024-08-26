//lei da responsabilidade unica.
//cabe ao Datacenter guardar, acessar e manipular os dados de

import Doctor from '../model/Doctor';
import Client from '../model/Client';
import Dog from '../model/Dog';
import Cat from '../model/Cat';
import Animal from '../model/Animal';

// FoodProduct e CleaningProduct
export default class Datacenter {
    public doctors: Doctor[] = [];

    public addNewDoctor(doctor: Doctor): void {
        this.doctors.push(doctor);
    }

    public removeDoctor(id: number): void {
        this.doctors.splice(id, 1);
    }

    public getDoctorsSize(): number {
        return this.doctors.length;
    }

    public clients: Client[] = [];

    public addNewClient(client: Client): void {
        this.clients.push(client);
    }

    public findClient(id: number): Client | undefined {
        let client = this.clients.find((client) => {
            console.log('Ola');

            client.getId() === id;
        });
        return client;
    }
    public removeClient(id: number): void {
        this.clients.splice(id, 1);
    }

    public getClientsSize(): number {
        return this.clients.length;
    }

    public animals: Animal[] = [];

    public addNewAnimal<A extends Animal>(animal: A): void {
        this.animals.push(animal);
    }
    public removeDog(id: number): void {
        this.animals.splice(id, 1);
    }

    public getDogsSize(): number {
        return this.animals.length;
    }
}
