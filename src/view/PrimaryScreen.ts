import promptSync from 'prompt-sync';
import DoctorController from '../control/DoctorController';
import ClientController from '../control/ClientController';
import { Genre } from '../model/Enum';
import AnimalController from '../control/AnimalController';
import Dog from '../model/Dog';
import ManagerAnimalController from '../control/ManagerAnimalController';

export default class PrimaryScreen {
    constructor(
        private doctorController: DoctorController,
        private clientController: ClientController,
        private animalController: AnimalController,
        private managerController: ManagerAnimalController,
        private id = 0,
    ) {}
    private prompt = promptSync();

    public getFirstScreen(): void {
        let showScreen: boolean = false;
        while (!showScreen) {
            // Get user input
            //console.clear();
            let choice = this.prompt(
                'Escolha:\n1 - Cadastro\n2 - Listar\n3 - Registrar animal\n5 - Sair\n',
            );

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
                    this.animalController.listAllAnimals();
                    break;
                case '3':
                    this.registerAnimal();

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
        console.log('Deu certo');
        this.id = this.id + 1;
        console.log(this.clientController.getClient(0));
    }

    public registerAnimal(): void {
        let id = this.id;

        // let name = this.prompt('Digite o nome do seu pet: ');
        // let age = Number(this.prompt('Digite a idade do seu pet: '));
        // let breed = this.prompt('Digite a raça do seu pet: ');
        // let weight = Number(this.prompt('Digite o peso do seu pet em Kg: '));
        // let test = this.animalController.getNewDog(id, name, age, breed, weight);
        let test = this.animalController.getNewDog(id, 'test', 2, 'poodle', 2);

        this.animalController.registerAnimal(test);
        this.managerController.linkAnimalClient(
            this.clientController.getClient(0),
            test.getDogID(),
        );
        console.log();
        this.id = this.id + 1;
    }
}
