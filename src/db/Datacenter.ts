
//lei da responsabilidade unica.
//cabe ao Datacenter guardar, acessar e manipular os dados de 

import Doctor from "../model/Doctor";

// FoodProduct e CleaningProduct
export default class Datacenter{

    public doctors: Doctor[] = []

    public addNewDoctor(doctor: Doctor):void{
        this.doctors.push(doctor)
    }

    public removeDoctor(id: number):void{
        this.doctors.splice(id,1)
    }

    public getDoctorSize():number{
        return this.doctors.length;
    }
}