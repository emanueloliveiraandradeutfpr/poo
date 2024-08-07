"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cat {
    constructor(age, breed, id, name, weight) {
        this.bite();
        this.makeNoise();
        this.age = age;
        this.breed = breed;
        this.id = id;
        this.name = name;
        this.weight = weight;
    }
    makeNoise() {
        console.log('Miau Miau');
    }
    bite() {
        console.log('Arranhão');
    }
}
exports.default = Cat;
