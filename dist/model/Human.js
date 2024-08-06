"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enum_1 = require("./Enum");
class Human {
    constructor(name, age, id, genre) {
        this.id = 0;
        this.age = 0;
        this.genre = Enum_1.Genre.Male;
        this.name = name;
        this.age = age;
        this.id = id;
        this.genre = genre;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
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
    getGenre() {
        return this.genre;
    }
    setGenre(genre) {
        this.genre = genre;
    }
}
exports.default = Human;
