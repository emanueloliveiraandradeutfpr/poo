"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datacenter_1 = __importDefault(require("../db/Datacenter"));
const Cat_1 = __importDefault(require("../model/Cat"));
const Dog_1 = __importDefault(require("../model/Dog"));
class AnimalController {
    constructor() {
        this.datacenter = new Datacenter_1.default();
    }
    getNewDog(id, name, age, breed, weight) {
        return new Dog_1.default(id, name, age, breed, weight);
    }
    getNewCat(id, name, age, breed, weight) {
        return new Cat_1.default(id, name, age, breed, weight);
    }
    listAllAnimals() {
        console.log(this.datacenter.animals);
    }
    registerAnimal(animal) {
        this.datacenter.addNewAnimal(animal);
    }
}
exports.default = AnimalController;
