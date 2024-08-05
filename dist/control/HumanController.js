"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datacenter_1 = __importDefault(require("../db/Datacenter"));
const Human_1 = __importDefault(require("../model/Human"));
class HumanController {
    constructor() {
        this.datacenter = new Datacenter_1.default();
    }
    getNewHuman() {
        return new Human_1.default();
    }
    registerNewDoctor(human) {
        this.datacenter.addNewHuman(human);
    }
    listAllHumans() {
        console.log(this.datacenter.humans);
    }
}
exports.default = HumanController;
