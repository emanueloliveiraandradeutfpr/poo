import ClientController from '../control/ClientController';
import { Genre } from '../model/Enum';

const controller = new ClientController();
let client1 = controller.getNewClient('Emanuel', 22, 0, Genre.Male);

test('must return client', () => {
    expect(controller.getNewClient('Emanuel', 22, 0, Genre.Male)).toBeTruthy();
});

test('must return age of client', () => {
    expect(client1.getAge()).toBe(22);
});

test('must return gender of client', () => {
    expect(client1.getGenre()).toBe(Genre.Male);
});
test('must return id of client', () => {
    expect(client1.getId()).toBe(0);
});

test('must return client on database', () => {
    controller.registerNewClient(client1);
    expect(controller.getClient(0)).toMatchObject(client1);
});
