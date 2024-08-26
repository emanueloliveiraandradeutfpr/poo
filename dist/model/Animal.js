"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name, age, breed, weight) {
        this.name = '';
        this.age = 0;
        this.breed = '';
        this.weight = 0;
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.weight = weight;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    getBreed() {
        return this.breed;
    }
    setBreed(breed) {
        this.breed = breed;
        0;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    makeNoise() {
        console.log('');
    }
    bite() {
        console.log('');
    }
}
exports.default = Animal;
