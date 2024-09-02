import PromptSync from 'prompt-sync';
import ClientController from '../control/ClientController';
import AnimalController from '../control/AnimalController';
import ManagerAnimalController from '../control/ManagerAnimalController';
import MyError from '../model/MyError';
import Client from '../model/Client';
import ConsultController from '../control/ConsultController';
import Doctor from '../model/Doctor';
import { Symptoms } from '../model/Symptoms';
import Animal from '../model/Animal';
import { Genre } from '../model/Enum';

export default class ConsultScreen {
    private clientId!: number;
    private animal!: Animal;
    private client!: Client;
    private id = 0;
    constructor(
        private clientController: ClientController,
        private animalController: AnimalController,
        private managerController: ManagerAnimalController,
        private consultController: ConsultController,
    ) {}
    private prompt = PromptSync();

    public getConsultScreen(client: Client): void {
        this.clientId = client.getId();
        this.client = client;

        let showScreen: boolean = false;
        while (!showScreen) {
            let choice = this.prompt(
                'Escolha:\n1 - Criar consulta \n2 - Registrar animal\n3 - Listar meus animais\n4 - Listar clientes\n5 - Voltar\n',
            );

            switch (choice) {
                case '1':
                    let doctor = new Doctor('Test', 40, 20, Genre.Male, '223121', 'Test');
                    this.createConsult(doctor, this.animal);
                    break;

                case '2':
                    this.animal = this.registerAnimal();
                    break;
                case '3':
                    this.animalController.listAllAnimals();
                    break;
                case '4':
                    this.consultController.listAllConsults();

                    break;
                case '5':
                    showScreen = true;
                    break;
                default:
                    console.log('Invalid answer!');
            }
        }
    }

    public registerAnimal(): Animal {
        let id = this.id;

        // let name = this.prompt('Digite o nome do seu pet: ');
        // let age = Number(this.prompt('Digite a idade do seu pet: '));
        // let breed = this.prompt('Digite a raça do seu pet: ');
        // let weight = Number(this.prompt('Digite o peso do seu pet em Kg: '));
        // let animal = this.animalController.getNewDog(id, name, age, breed, weight);

        let animal = this.animalController.getNewDog(id, 'test', 2, 'poodle', 2);

        try {
            this.animalController.registerAnimal(animal);
        } catch (error) {
            console.log(error);
        }
        return animal;
        this.id = this.id + 1;
    }

    public createConsult(doctor: Doctor, animal: Animal): void {
        let consult = this.consultController.getNewConsult(doctor, this.client, animal, [
            Symptoms.Convulsão,
            Symptoms.Diarreia,
        ]);
        this.consultController.registerConsult(consult);
    }
}
