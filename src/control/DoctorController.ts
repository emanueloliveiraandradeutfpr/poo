import Datacenter from "../db/Datacenter"
import Doctor from "../model/Doctor";

export default class DoctorController{

    private datacenter: Datacenter =  new Datacenter();

    
    public getNewDoctor(): Doctor {
        return new Doctor()
    }

    public registerNewDoctor(doctor: Doctor) {
        this.datacenter.addNewDoctor(doctor)
    }

    public listAllDoctors(): void {
        console.log(this.datacenter.doctors);
        
    }
}
