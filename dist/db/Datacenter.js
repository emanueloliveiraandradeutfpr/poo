"use strict";
//lei da responsabilidade unica.
//cabe ao Datacenter guardar, acessar e manipular os dados de
Object.defineProperty(exports, "__esModule", { value: true });
// FoodProduct e CleaningProduct
class Datacenter {
    constructor() {
        this.doctors = [];
        this.clients = [];
        this.animals = [];
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
    addNewClient(client) {
        this.clients.push(client);
    }
    removeClient(id) {
        this.clients.splice(id, 1);
    }
    getClientsSize() {
        return this.clients.length;
    }
    addNewAnimal(animal) {
        this.animals.push(animal);
    }
    removeAnimal(id) {
        this.animals.splice(id, 1);
    }
    getAnimalSize() {
        return this.animals.length;
    }
}
exports.default = Datacenter;
