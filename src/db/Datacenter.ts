//lei da responsabilidade unica.
//cabe ao Datacenter guardar, acessar e manipular os dados de

import Doctor from '../model/Doctor';
import Client from '../model/Client';
import Animal from '../model/Animal';
import Consult from '../model/Consult';

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
    public removeAnimal(id: number): void {
        this.animals.splice(id, 1);
    }

    public getAnimalSize(): number {
        return this.animals.length;
    }

    public consults: Consult[] = [];

    public addNewConsult(consult: Consult) {
        this.consults.push(consult);
    }

    removeConsult(id: number): void {
        this.consults.splice(id, 1);
    }
    public getConsultSize(): number {
        return this.consults.length;
    }
}
