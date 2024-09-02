import Datacenter from '../db/Datacenter';
import Animal from '../model/Animal';
import Client from '../model/Client';
import Consult from '../model/Consult';
import Doctor from '../model/Doctor';
import { Symptoms } from '../model/Symptoms';

export default class ConsultController {
    private datacenter: Datacenter = new Datacenter();

    getNewConsult(doctor: Doctor, client: Client, animal: Animal, symptoms?: Symptoms[]) {
        return new Consult(doctor, client, animal, symptoms);
    }

    registerConsult(consult: Consult): void {
        this.datacenter.addNewConsult(consult);
    }

    findMyConsults(id: number): void {
        let res = this.datacenter.consults.filter(
            (consult) => consult.client.getId() === id,
        );
        console.log(res);
    }

    listAllConsults(): void {
        console.log(this.datacenter.consults);
    }
}
