import Datacenter from '../db/Datacenter';
import Human from '../model/Human';

export default class HumanController {
    private datacenter: Datacenter = new Datacenter();

    public getNewHuman(): Human {
        return new Human();
    }

    public registerNewDoctor(human: Human) {
        this.datacenter.addNewHuman(human);
    }

    public listAllHumans(): void {
        console.log(this.datacenter.humans);
    }
}
