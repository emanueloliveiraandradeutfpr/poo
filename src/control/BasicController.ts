import PrimaryScreen from '../view/PrimaryScreen';
import ClientController from './ClientController';
import DoctorController from './DoctorController';
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
