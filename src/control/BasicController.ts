import PrimaryScreen from '../view/PrimaryScreen';
import ClientController from './ClientController';
import DoctorController from './DoctorController';

export default class BasicController {
    private primaryScreen: PrimaryScreen = new PrimaryScreen(
        new DoctorController(),
        new ClientController(),
    );

    public startSystem(): void {
        this.primaryScreen.getFirstScreen();
    }
}
