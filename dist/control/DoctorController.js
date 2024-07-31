"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datacenter_1 = __importDefault(require("../db/Datacenter"));
const Doctor_1 = __importDefault(require("../model/Doctor"));
class DoctorController {
    constructor() {
        this.datacenter = new Datacenter_1.default();
    }
    getNewDoctor() {
        return new Doctor_1.default();
    }
    registerNewDoctor(doctor) {
        this.datacenter.addNewDoctor(doctor);
    }
    listAllDoctors() {
        console.log(this.datacenter.doctors);
    }
}
exports.default = DoctorController;
