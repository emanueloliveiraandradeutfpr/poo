"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Enum_1 = require("../model/Enum");
class PrimaryScreen {
    constructor(doctorController, clientController, animalController, managerController, id = 0) {
        this.doctorController = doctorController;
        this.clientController = clientController;
        this.animalController = animalController;
        this.managerController = managerController;
        this.id = id;
        this.prompt = (0, prompt_sync_1.default)();
    }
    getFirstScreen() {
        var _a;
        let showScreen = false;
        while (!showScreen) {
            // Get user input
            //console.clear();
            let choice = this.prompt('Escolha:\n1 - Cadastro\n2 - Listar\n3 - Registrar animal\n5 - Sair\n');
            switch (choice) {
                case '1':
                    // let doctor: Doctor = this.doctorController.getNewDoctor();
                    // this.registerDoctor(doctor);
                    // this.registerHuman();
                    this.makeMe();
                    break;
                case '2':
                    // this.doctorController.listAllDoctors();
                    this.clientController.listAllClients();
                    this.animalController.findMyAnimals((_a = this.clientController.getClient(0)) === null || _a === void 0 ? void 0 : _a.animals);
                    break;
                case '3':
                    this.registerAnimal();
                    break;
                case '4':
                    this.animalController.listAllAnimals();
                    break;
                case '5':
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
    makeMe() {
        let id = this.id;
        let client = this.clientController.getNewClient('Emanuel', 22, id, Enum_1.Genre.Male);
        this.clientController.registerNewClient(client);
        this.id = this.id + 1;
    }
    registerHuman() {
        let id = this.id;
        let name = this.prompt('Digite o seu nome: ');
        let age = Number(this.prompt('Digite a sua idade: '));
        let genre = Number(this.prompt('Digite o seu genero: 0 para "Masculino" ou  1 para Feminino: ', {
            value: '0',
        }));
        genre === 0 ? (genre = Enum_1.Genre.Male) : (genre = Enum_1.Genre.Female);
        let client = this.clientController.getNewClient(name, age, id, genre);
        this.clientController.registerNewClient(client);
        this.id = this.id + 1;
    }
    registerAnimal() {
        let id = this.id;
        // let name = this.prompt('Digite o nome do seu pet: ');
        // let age = Number(this.prompt('Digite a idade do seu pet: '));
        // let breed = this.prompt('Digite a raça do seu pet: ');
        // let weight = Number(this.prompt('Digite o peso do seu pet em Kg: '));
        // let test = this.animalController.getNewDog(id, name, age, breed, weight);
        let test = this.animalController.getNewDog(id, 'test', 2, 'poodle', 2);
        this.animalController.registerAnimal(test);
        this.managerController.linkAnimalClient(this.clientController.getClient(0), test.getId());
        this.id = this.id + 1;
    }
}
exports.default = PrimaryScreen;
