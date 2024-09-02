import Client from '../model/Client';

export default class ManagerAnimalController {
    linkAnimalClient(client: Client, animalId: number) {
        client.animals.push(animalId);
    }
}
