import PromptSync from 'prompt-sync';
import ClientController from '../control/ClientController';
import AnimalController from '../control/AnimalController';
import ManagerAnimalController from '../control/ManagerAnimalController';

export default class ConsultScreen {
    private clientId!: number;
    private id = 0;
    constructor(
        private clientController: ClientController,
        private animalController: AnimalController,
        private managerController: ManagerAnimalController,
    ) {}
    private prompt = PromptSync();

    public getConsultScreen(id: number): void {
        this.clientId = id;

        let showScreen: boolean = false;
        while (!showScreen) {
            let choice = this.prompt(
                'Escolha:\n1 - Criar consulta \n2 - Registrar animal\n3 - Listar meus animais\n4 - Listar clientes\n5 - Sair\n',
            );

            switch (choice) {
                case '1':
                    break;

                case '2':
                    this.registerAnimal();
                    break;
                case '3':
                    this.animalController.findMyAnimals(
                        this.clientController.getClient(this.clientId)?.animals,
                    );
                    break;
                case '4':
                    console.log('oi');
                    this.clientController.listAllClients();

                    break;
                case '5':
                    showScreen = true;
                    break;
                default:
                    console.log('Invalid answer!');
            }
        }
    }

    public registerAnimal(): void {
        let id = this.id;

        // let name = this.prompt('Digite o nome do seu pet: ');
        // let age = Number(this.prompt('Digite a idade do seu pet: '));
        // let breed = this.prompt('Digite a raça do seu pet: ');
        // let weight = Number(this.prompt('Digite o peso do seu pet em Kg: '));
        // let animal = this.animalController.getNewDog(id, name, age, breed, weight);

        let animal = this.animalController.getNewDog(id, 'test', 2, 'poodle', 2);

        try {
            this.animalController.registerAnimal(animal);
        } catch (error: any) {
            console.log(error);
        }
        try {
            if (!this.clientController.getClient(this.clientId)) {
                throw new Error('Não foi possivel encontar o usuário');
            } else {
                this.managerController.linkAnimalClient(
                    this.clientController.getClient(this.clientId),
                    animal.getId(),
                );
            }
        } catch (error) {
            console.log(error);
        }

        this.id = this.id + 1;
    }
}
