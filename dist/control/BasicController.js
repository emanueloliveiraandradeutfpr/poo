"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrimaryScreen_1 = __importDefault(require("../view/PrimaryScreen"));
const AnimalController_1 = __importDefault(require("./AnimalController"));
const ClientController_1 = __importDefault(require("./ClientController"));
const DoctorController_1 = __importDefault(require("./DoctorController"));
const ManagerAnimalController_1 = __importDefault(require("./ManagerAnimalController"));
class BasicController {
    constructor() {
        this.primaryScreen = new PrimaryScreen_1.default(new DoctorController_1.default(), new ClientController_1.default(), new AnimalController_1.default(), new ManagerAnimalController_1.default());
    }
    startSystem() {
        this.primaryScreen.getFirstScreen();
    }
}
exports.default = BasicController;
