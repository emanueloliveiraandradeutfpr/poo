import Client from '../model/Client';
import ConsultScreen from '../view/ConsultScreen';
import AnimalController from './AnimalController';
import ClientController from './ClientController';
import ConsultController from './ConsultController';
import ManagerAnimalController from './ManagerAnimalController';

export default class PageController {
    private consultScreen: ConsultScreen = new ConsultScreen(
        new ClientController(),
        new AnimalController(),
        new ManagerAnimalController(),
        new ConsultController(),
    );
    public goToConsult(client: Client): void {
        this.consultScreen.getConsultScreen(client);
    }
}
