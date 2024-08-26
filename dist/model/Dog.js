"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Dog extends Animal_1.default {
    constructor(id, name, age, breed, weight) {
        super(name, age, breed, weight);
        this.dogId = id;
    }
    getDogID() {
        return this.dogId;
    }
    setDogID(id) {
        this.dogId = id;
    }
    makeNoise() {
        console.log('Au Au!');
    }
    bite() {
        console.log('Mordendo');
    }
}
exports.default = Dog;
