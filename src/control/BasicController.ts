import PrimaryScreen from '../view/PrimaryScreen';
import DoctorController from './DoctorController';
import HumanController from './HumanController';

export default class BasicController {
    private primaryScreen: PrimaryScreen = new PrimaryScreen(
        new DoctorController(),
        new HumanController(),
    );

    public startSystem(): void {
        this.primaryScreen.getFirstScreen();
    }
}
