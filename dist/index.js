"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasicController_1 = __importDefault(require("./control/BasicController"));
const Dog_1 = __importDefault(require("./model/Dog"));
let doguinho = new Dog_1.default();
doguinho.setName('doguinho');
doguinho.makeNoise();
let startController = new BasicController_1.default();
startController.startSystem();
