import Animal from './Animal';
import Client from './Client';
import Doctor from './Doctor';
import IConsult from './IConsult';
import { Symptoms } from './Symptoms';

export default class Consult implements IConsult {
    doctor!: Doctor;
    client!: Client;
    symptoms?: Symptoms[];
    animal!: Animal;

    constructor(doctor: Doctor, client: Client, animal: Animal, symptoms?: Symptoms[]) {
        this.doctor = doctor;
        this.client = client;
        this.animal = animal;
        if (symptoms) {
            this.symptoms = symptoms;
        }
    }
}
