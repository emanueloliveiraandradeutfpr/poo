"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datacenter_1 = __importDefault(require("../db/Datacenter"));
const Client_1 = __importDefault(require("../model/Client"));
class ClientController {
    constructor() {
        this.datacenter = new Datacenter_1.default();
    }
    getNewClient(name, age, id, genre) {
        return new Client_1.default(name, age, id, genre);
    }
    findClient(name) {
        let res = this.datacenter.clients.find((client) => client.getName().toLowerCase() === name.toLowerCase());
        console.log(res);
        return res;
    }
    registerNewClient(client) {
        this.datacenter.addNewClient(client);
    }
    listAllClients() {
        console.log(this.datacenter.clients);
    }
    getClient(id) {
        console.log(this.datacenter.clients);
        console.log(id);
        return this.datacenter.clients[id];
    }
}
exports.default = ClientController;
