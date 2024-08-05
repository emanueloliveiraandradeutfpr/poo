//lei da responsabilidade unica.
//cabe ao Datacenter guardar, acessar e manipular os dados de

import Doctor from '../model/Doctor';
import Human from '../model/Human';

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

    public humans: Human[] = [];

    public addNewHuman(human: Human): void {
        this.humans.push(human);
    }

    public removeHuman(id: number): void {
        this.humans.splice(id, 1);
    }

    public getHumansSize(): number {
        return this.humans.length;
    }
}
