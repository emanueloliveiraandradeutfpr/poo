"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Cat extends Animal_1.default {
    constructor(id, name, age, breed, weight) {
        super(name, age, breed, weight);
        this.catId = id;
    }
    getDogID() {
        return this.catId;
    }
    setDogID(id) {
        this.catId = id;
    }
    makeNoise() {
        console.log('Miau Miau');
    }
    bite() {
        console.log('Mordiscando');
    }
}
exports.default = Cat;
