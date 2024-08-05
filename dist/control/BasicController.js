"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrimaryScreen_1 = __importDefault(require("../view/PrimaryScreen"));
const ClientController_1 = __importDefault(require("./ClientController"));
const DoctorController_1 = __importDefault(require("./DoctorController"));
class BasicController {
    constructor() {
        this.primaryScreen = new PrimaryScreen_1.default(new DoctorController_1.default(), new ClientController_1.default());
    }
    startSystem() {
        this.primaryScreen.getFirstScreen();
    }
}
exports.default = BasicController;
