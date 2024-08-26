import PrimaryScreen from '../view/PrimaryScreen';
import AnimalController from './AnimalController';
import ClientController from './ClientController';
import DoctorController from './DoctorController';

export default class BasicController {
    private primaryScreen: PrimaryScreen = new PrimaryScreen(
        new DoctorController(),
        new ClientController(),
        new AnimalController(),
    );

    public startSystem(): void {
        this.primaryScreen.getFirstScreen();
    }
}
