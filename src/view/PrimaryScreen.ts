import promptSync from 'prompt-sync';
import Doctor from '../model/Doctor';
import DoctorController from '../control/DoctorController';
import Human from '../model/Human';
import ClientController from '../control/ClientController';
import Client from '../model/Client';

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

                    let client: Client = this.clientController.getNewClient();
                    this.registerHuman(client);

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

    public registerHuman(client: Client): void {
        client.setId(this.id);
        this.id = this.id + 1;
        let name = this.prompt('Digite o seu nome: ');
        client.setName(name);
        let age = Number(this.prompt('Digite a sua idade: '));
        client.setAge(age);

        let genre = Number(
            this.prompt('Digite o seu genero, 1 para Masculino e 2 par Feminino'),
        );
        client.setGenre(genre);
        this.clientController.registerNewClient(client);
        console.log('Deu certo');
    }
}
