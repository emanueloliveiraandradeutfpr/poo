import Animal from './IAnimal';
import Human from './Human';

export default class Client extends Human {
    constructor(name: string, age: number, id: number) {
        super(name, age, id);
    }

    sayHello(): void {
        console.log('Olá doutor');
    }
}
