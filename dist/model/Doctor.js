"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Human_1 = __importDefault(require("./Human"));
class Doctor extends Human_1.default {
    constructor(name, age, id, genre, crmv, specialization) {
        super(name, age, id, genre);
        this.crmv = '';
        this.specialization = '';
        this.crmv = crmv;
        this.specialization = specialization;
    }
    getCrmv() {
        return this.crmv;
    }
    setCrmv(crmv) {
        this.crmv = crmv;
    }
    getSpecialization() {
        return this.specialization;
    }
    setSpecialization(specialization) {
        this.specialization = specialization;
    }
}
exports.default = Doctor;
