import Animal from './Animal';
import Human from './Human';

export default class Client extends Human {
    constructor(name?: string, age?: number) {
        super(name, age);
    }
    private animals: Animal[] = [];
}
