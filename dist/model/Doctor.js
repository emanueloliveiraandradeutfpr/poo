"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Human_1 = __importDefault(require("./Human"));
class Doctor extends Human_1.default {
    constructor() {
        super(...arguments);
        this.crmv = '';
        this.specialization = '';
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
