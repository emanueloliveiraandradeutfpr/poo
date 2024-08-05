"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class PrimaryScreen {
    constructor(doctorController, humanController, id = 0) {
        this.doctorController = doctorController;
        this.humanController = humanController;
        this.id = id;
        this.prompt = (0, prompt_sync_1.default)();
    }
    getFirstScreen() {
        let showScreen = false;
        while (!showScreen) {
            // Get user input
            //console.clear();
            let choice = this.prompt('Escolha:\n1 - Cadastro\n2 - Listar\n3 - Sair\n');
            switch (choice) {
                case '1':
                    // let doctor: Doctor = this.doctorController.getNewDoctor();
                    // this.registerDoctor(doctor);
                    let human = this.humanController.getNewHuman();
                    this.registerHuman(human);
                    break;
                case '2':
                    // this.doctorController.listAllDoctors();
                    this.humanController.listAllHumans();
                    break;
                case '3':
                    showScreen = true;
                    break;
                default:
                    //console.clear();
                    console.log('Invalid answer!');
            }
        }
    }
    registerDoctor(doctor) {
        let name = this.prompt('Digite o nome do medico: ');
        doctor.setName(name);
        let specialization = this.prompt('Digite a especialização do medico: ');
        doctor.setSpecialization(specialization);
        this.doctorController.registerNewDoctor(doctor);
        this.doctorController.listAllDoctors();
    }
    registerHuman(human) {
        human.setId(this.id);
        this.id = this.id + 1;
        let name = this.prompt('Digite o seu nome: ');
        human.setName(name);
        let age = Number(this.prompt('Digite a sua idade: '));
        human.setAge(age);
        this.humanController.registerNewHuman(human);
        console.log('Deu certo');
    }
}
exports.default = PrimaryScreen;
