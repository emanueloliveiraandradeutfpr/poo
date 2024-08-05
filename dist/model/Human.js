"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, id = 0) {
        this.id = 0;
        this.age = 0;
        name ? (this.name = name) : name;
        age ? (this.age = age) : age;
        this.id = id;
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
}
exports.default = Human;
