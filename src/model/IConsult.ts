import Animal from './Animal';
import Client from './Client';
import Doctor from './Doctor';
import { Symptoms } from './Symptoms';

export default interface IConsult {
    doctor: Doctor;
    client: Client;
    symptoms?: Symptoms[];
    animal: Animal;
}
