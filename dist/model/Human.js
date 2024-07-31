"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor() {
        this.id = 0;
        this.name = '';
        this.age = 0;
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
        return this.id;
    }
    setAge(age) {
        this.age = age;
    }
}
exports.default = Human;
