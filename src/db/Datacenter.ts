//lei da responsabilidade unica.
//cabe ao Datacenter guardar, acessar e manipular os dados de

import Doctor from '../model/Doctor';
import Client from '../model/Client';

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
}
