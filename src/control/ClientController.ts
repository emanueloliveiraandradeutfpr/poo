import Datacenter from '../db/Datacenter';
import Cat from '../model/Cat';
import Client from '../model/Client';
import Dog from '../model/Dog';

export default class ClientController {
    private datacenter: Datacenter = new Datacenter();

    public getNewClient(): Client {
        return new Client();
    }

    public registerNewClient(client: Client) {
        this.datacenter.addNewClient(client);
    }

    public listAllClients(): void {
        console.log(this.datacenter.clients);
    }

    public getClient(id: number): void {
        console.log(this.datacenter.clients[id]);
    }
    public registerNewAnimal(id: number, cat?: Cat, dog?: Dog) {
        console.log(this.datacenter.clients[id]);
    }
}
