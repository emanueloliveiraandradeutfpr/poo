import ConsultScreen from '../view/ConsultScreen';
import AnimalController from './AnimalController';
import ClientController from './ClientController';
import DoctorController from './DoctorController';
import ManagerAnimalController from './ManagerAnimalController';

export default class PageController {
    private consultScreen: ConsultScreen = new ConsultScreen(
        new ClientController(),
        new AnimalController(),
        new ManagerAnimalController(),
    );
    public goToConsult(id: number): void {
        this.consultScreen.getConsultScreen(id);
    }
}
