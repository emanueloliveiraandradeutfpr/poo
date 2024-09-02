import promptSync from 'prompt-sync';
import DoctorController from '../control/DoctorController';
import ClientController from '../control/ClientController';
import { Genre } from '../model/Enum';
// import ConsultScreen from './ConsultScreen';
import MyError from '../model/MyError';
import Doctor from '../model/Doctor';
import PageController from '../control/PageController';

export default class PrimaryScreen {
    private clientId!: number;
    private id = 0;
    constructor(
        private doctorController: DoctorController,
        private clientController: ClientController,
        private pageController: PageController,
    ) {}
    private prompt = promptSync();

    public getFirstScreen(): void {
        let showScreen: boolean = false;
        while (!showScreen) {
            // Get user input
            //console.clear();
            let choice = this.prompt(
                'Escolha:\n1 - Cadastro de clientes\n2 - Buscar cliente\n3 - Listar todos os clientes \n5 - Sair\n',
            );

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
                            throw new MyError('Cliente não encontrado');
                        } else {
                            this.clientId = res.getId();
                            this.pageController.goToConsult(
                                this.clientController.getClient(this.clientId),
                            );
                            break;
                        }
                    } catch (error) {
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

    public registerDoctor(doctor: any): void {
        let name = this.prompt('Digite o nome do medico: ');
        doctor.setName(name);
        let specialization = this.prompt('Digite a especialização do medico: ');
        doctor.setSpecialization(specialization);

        this.doctorController.registerNewDoctor(doctor);
        this.doctorController.listAllDoctors();
    }

    public makeMe(): void {
        let id = this.id;
        let client = this.clientController.getNewClient('Emanuel', 22, id, Genre.Male);
        this.clientController.registerNewClient(client);
        this.id = this.id + 1;
    }

    public registerHuman(): void {
        let id = this.id;
        let name = this.prompt('Digite o seu nome: ');
        let age = Number(this.prompt('Digite a sua idade: '));

        let genre = Number(
            this.prompt('Digite o seu genero: 0 para "Masculino" ou  1 para Feminino: ', {
                value: '0',
            }),
        );
        genre === 0 ? (genre = Genre.Male) : (genre = Genre.Female);

        let client = this.clientController.getNewClient(name, age, id, genre);

        this.clientController.registerNewClient(client);
        this.id = this.id + 1;
    }
}
