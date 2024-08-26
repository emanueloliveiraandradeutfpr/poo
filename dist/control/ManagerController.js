"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datacenter_1 = __importDefault(require("../db/Datacenter"));
class ManagerController {
    constructor() {
        this.datacenter = new Datacenter_1.default();
    }
}
exports.default = ManagerController;
