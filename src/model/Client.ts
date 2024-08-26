import { Genre } from './Enum';
import Human from './Human';

export default class Client extends Human {
    private user!: string;
    private password!: string;
    constructor(name: string, age: number, id: number, genre: Genre) {
        super(name, age, id, genre);
    }

    public animals: number[] = [];
}
