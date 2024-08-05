import Animal from './Animal';
import { Genre } from './Enum';
import Human from './Human';

export default class Client extends Human {
    constructor(name?: string, age?: number, genre?: Genre) {
        super(name, age, genre);
    }
    private animals: Animal[] = [];
}
