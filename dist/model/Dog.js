"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Dog extends Animal_1.default {
    makeNoise() {
        console.log('Au Au!');
    }
    bite() {
        console.log('Mordendo');
    }
}
exports.default = Dog;
