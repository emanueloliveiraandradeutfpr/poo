import Datacenter from '../db/Datacenter';
import Client from '../model/Client';
import { Genre } from '../model/Enum';

export default class ClientController {
    private datacenter: Datacenter = new Datacenter();

    public getNewClient(name: string, age: number, id: number, genre: Genre): Client {
        return new Client(name, age, id, genre);
    }

    findClient(name: string): Client | undefined {
        let res = this.datacenter.clients.find(
            (client) => client.getName().toLowerCase() === name.toLowerCase(),
        );
        console.log(res);

        return res;
    }

    public registerNewClient(client: Client) {
        this.datacenter.addNewClient(client);
    }

    public listAllClients(): void {
        console.log(this.datacenter.clients);
    }

    public getClient(id: number): Client {
        console.log(this.datacenter.clients);
        console.log(id);

        return this.datacenter.clients[id];
    }
}
