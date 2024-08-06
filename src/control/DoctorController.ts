import Datacenter from '../db/Datacenter';
import Doctor from '../model/Doctor';
import { Genre } from '../model/Enum';

export default class DoctorController {
    private datacenter: Datacenter = new Datacenter();

    public getNewDoctor(
        name: string,
        age: number,
        id: number,
        genre: Genre,
        crmv: string,
        specialization: string,
    ): Doctor {
        return new Doctor(name, age, id, genre, crmv, specialization);
    }

    public registerNewDoctor(doctor: Doctor) {
        this.datacenter.addNewDoctor(doctor);
    }

    public listAllDoctors(): void {
        console.log(this.datacenter.doctors);
    }
}
