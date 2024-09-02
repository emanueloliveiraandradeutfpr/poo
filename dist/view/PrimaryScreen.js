"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Enum_1 = require("../model/Enum");
// import ConsultScreen from './ConsultScreen';
const MyError_1 = __importDefault(require("../model/MyError"));
class PrimaryScreen {
    constructor(doctorController, clientController, pageController) {
        this.doctorController = doctorController;
        this.clientController = clientController;
        this.pageController = pageController;
        this.id = 0;
        this.prompt = (0, prompt_sync_1.default)();
    }
    getFirstScreen() {
        let showScreen = false;
        while (!showScreen) {
            // Get user input
            //console.clear();
            let choice = this.prompt('Escolha:\n1 - Cadastro de clientes\n2 - Buscar cliente\n3 - Listar todos os clientes \n5 - Sair\n');
            switch (choice) {
                case '1':
                    //this.registerHuman();
                    this.makeMe();
                    break;
                case '2':
                    let name = this.prompt('Digite o nome do cliente: ');
                    try {
                        let res = this.clientController.findClient(name);
                        if (!res) {
                            throw new MyError_1.default('Cliente não encontrado');
                        }
                        else {
                            this.clientId = res.getId();
                            this.pageController.goToConsult(this.clientController.getClient(this.clientId));
                            break;
                        }
                    }
                    catch (error) {
                        console.log(error);
                    }
                    break;
                case '3':
                    this.clientController.listAllClients();
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
}
exports.default = PrimaryScreen;
