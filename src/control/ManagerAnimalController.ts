import Datacenter from '../db/Datacenter';
import Client from '../model/Client';

export default class ManagerAnimalController {
    private datacenter: Datacenter = new Datacenter();

    linkAnimalClient(client: Client, animalId: number) {
        console.log('test');

        client.animals.push(animalId);
    }
}
