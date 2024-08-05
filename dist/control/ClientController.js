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
    getNewClient() {
        return new Client_1.default();
    }
    registerNewClient(client) {
        this.datacenter.addNewClient(client);
    }
    listAllClients() {
        console.log(this.datacenter.clients);
    }
    getClient(id) {
        console.log(this.datacenter.clients[id]);
    }
    registerNewAnimal(id, cat, dog) {
        console.log(this.datacenter.clients[id]);
    }
}
exports.default = ClientController;
