"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    constructor(age, breed, id, name, weight) {
        this.age = age;
        this.breed = breed;
        this.id = id;
        this.name = name;
        this.weight = weight;
    }
    makeNoise() {
        console.log('Au Au!');
    }
    bite() {
        console.log('Mordendo');
    }
}
exports.default = Dog;
