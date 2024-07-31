"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class PrimaryScreen {
    constructor(doctorController) {
        this.doctorController = doctorController;
        this.prompt = (0, prompt_sync_1.default)();
    }
    getFirstScreen() {
        let showScreen = false;
        while (!showScreen) {
            // Get user input
            //console.clear();
            let choice = this.prompt("Escolha:\n1 - Cadastro de Médicos\n2 - Listar\n3 - Sair\n");
            switch (choice) {
                case "1":
                    let doctor = this.doctorController.getNewDoctor();
                    this.registerDoctor(doctor);
                    break;
                case "2":
                    this.doctorController.listAllDoctors();
                    break;
                case "3":
                    showScreen = true;
                    break;
                default:
                    //console.clear();
                    console.log("Invalid answer!");
            }
        }
    }
    registerDoctor(doctor) {
        let name = this.prompt("Digite o nome do medico: ");
        doctor.setName(name);
        let specialization = this.prompt("Digite a especialização do medico: ");
        doctor.setSpecialization(specialization);
        this.doctorController.registerNewDoctor(doctor);
        this.doctorController.listAllDoctors();
    }
}
exports.default = PrimaryScreen;
