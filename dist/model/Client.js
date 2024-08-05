"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Human_1 = __importDefault(require("./Human"));
class Client extends Human_1.default {
    constructor(name, age) {
        super(name, age);
        this.animals = [];
    }
}
exports.default = Client;
