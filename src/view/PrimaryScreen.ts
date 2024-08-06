import promptSync from 'prompt-sync';
import Doctor from '../model/Doctor';
import DoctorController from '../control/DoctorController';
import Human from '../model/Human';
import ClientController from '../control/ClientController';
import Client from '../model/Client';
import { Genre } from '../model/Enum';

export default class PrimaryScreen {
    constructor(
        private doctorController: DoctorController,
        private clientController: ClientController,
        private id = 0,
    ) {}
    private prompt = promptSync();

    public getFirstScreen(): void {
        let showScreen: boolean = false;
        while (!showScreen) {
            // Get user input
            //console.clear();
            let choice = this.prompt(
                'Escolha:\n1 - Cadastro\n2 - Listar\n3 - Mostrar Eu\n5 - Sair\n',
            );

            switch (choice) {
                case '1':
                    // let doctor: Doctor = this.doctorController.getNewDoctor();
                    // this.registerDoctor(doctor);

                    this.registerHuman();

                    break;

                case '2':
                    // this.doctorController.listAllDoctors();
                    this.clientController.listAllClients();
                    break;
                case '3':
                    this.clientController.getClient(0);
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

    public registerDoctor(doctor: Doctor): void {
        let name = this.prompt('Digite o nome do medico: ');
        doctor.setName(name);
        let specialization = this.prompt('Digite a especialização do medico: ');
        doctor.setSpecialization(specialization);

        this.doctorController.registerNewDoctor(doctor);
        this.doctorController.listAllDoctors();
    }

    public registerHuman(): void {
        let id = this.id;
        let name = this.prompt('Digite o seu nome: ');
        let age = Number(this.prompt('Digite a sua idade: '));
        let genre = Number(
            this.prompt('Digite o seu genero: 0 para "Masculino" ou  1 para Feminino'),
        );
        let client = this.clientController.getNewClient(name, age, id, genre);

        this.clientController.registerNewClient(client);
        console.log('Deu certo');
        this.id = this.id + 1;
    }
}
