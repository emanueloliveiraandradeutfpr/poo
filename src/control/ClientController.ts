import Datacenter from '../db/Datacenter';
import Client from '../model/Client';
import { Genre } from '../model/Enum';

export default class ClientController {
    private datacenter: Datacenter = new Datacenter();

    public getNewClient(name: string, age: number, id: number, genre: Genre): Client {
        return new Client(name, age, id, genre);
    }

    public registerNewClient(client: Client) {
        this.datacenter.addNewClient(client);
    }

    public listAllClients(): void {
        console.log(this.datacenter.clients);
    }

    public getClient(id: number): Client {
        return this.datacenter.clients[id];
    }
}
