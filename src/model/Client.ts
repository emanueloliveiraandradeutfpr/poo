import Animal from './Animal';
import { Genre } from './Enum';
import Human from './Human';

export default class Client extends Human {
    constructor(name: string, age: number, id: number, genre: Genre) {
        super(name, age, id, genre);
    }
    private animals: Animal[] = [];
}
