"use strict";
//lei da responsabilidade unica.
//cabe ao Datacenter guardar, acessar e manipular os dados de
Object.defineProperty(exports, "__esModule", { value: true });
// FoodProduct e CleaningProduct
class Datacenter {
    constructor() {
        this.doctors = [];
        this.humans = [];
    }
    addNewDoctor(doctor) {
        this.doctors.push(doctor);
    }
    removeDoctor(id) {
        this.doctors.splice(id, 1);
    }
    getDoctorsSize() {
        return this.doctors.length;
    }
    addNewHuman(human) {
        this.humans.push(human);
    }
    removeHuman(id) {
        this.humans.splice(id, 1);
    }
    getHumansSize() {
        return this.humans.length;
    }
}
exports.default = Datacenter;
