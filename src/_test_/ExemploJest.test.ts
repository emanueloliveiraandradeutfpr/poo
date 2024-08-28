import ClientController from '../control/ClientController';
import Datacenter from '../db/Datacenter';
import Client from '../model/Client';
import { Genre } from '../model/Enum';

const client = new ClientController();

test('must return client', () => {
    expect(client.getNewClient('Emanuel', 22, 0, Genre.Male)).toBeTruthy();
});

test('must return age of client', () => {
    expect(client.getNewClient('Emanuel', 22, 0, Genre.Male).getAge()).toBe(22);
});

test('must return gender of client', () => {
    expect(client.getNewClient('Emanuel', 22, 0, Genre.Male).getGenre()).toBe(Genre.Male);
});

test('must return client on database', () => {
    client.registerNewClient(client.getNewClient('Emanuel', 22, 0, Genre.Male));
    const data = new Datacenter();

    expect(client.getClient(0)).toBeTruthy();
});
