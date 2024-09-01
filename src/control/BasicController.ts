import ConsultScreen from '../view/ConsultScreen';
import PrimaryScreen from '../view/PrimaryScreen';
import AnimalController from './AnimalController';
import ClientController from './ClientController';
import DoctorController from './DoctorController';
import ManagerAnimalController from './ManagerAnimalController';
import PageController from './PageController';

export default class BasicController {
    private primaryScreen: PrimaryScreen = new PrimaryScreen(
        new DoctorController(),
        new ClientController(),
        new PageController(),
    );

    public startSystem(): void {
        this.primaryScreen.getFirstScreen();
    }
}
