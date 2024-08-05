import promptSync from 'prompt-sync';
import Doctor from '../model/Doctor';
import DoctorController from '../control/DoctorController';
import Human from '../model/Human';
import HumanController from '../control/HumanController';

export default class PrimaryScreen {
    constructor(
        private doctorController: DoctorController,
        private humanController: HumanController,
        private id = 0,
    ) {}
    private prompt = promptSync();

    public getFirstScreen(): void {
        let showScreen: boolean = false;
        while (!showScreen) {
            // Get user input
            //console.clear();
            let choice = this.prompt('Escolha:\n1 - Cadastro\n2 - Listar\n3 - Sair\n');

            switch (choice) {
                case '1':
                    // let doctor: Doctor = this.doctorController.getNewDoctor();
                    // this.registerDoctor(doctor);

                    let human: Human = this.humanController.getNewHuman();
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

    public registerDoctor(doctor: Doctor): void {
        let name = this.prompt('Digite o nome do medico: ');
        doctor.setName(name);
        let specialization = this.prompt('Digite a especialização do medico: ');
        doctor.setSpecialization(specialization);

        this.doctorController.registerNewDoctor(doctor);
        this.doctorController.listAllDoctors();
    }

    public registerHuman(human: Human): void {
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
