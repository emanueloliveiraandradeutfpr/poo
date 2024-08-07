import BasicController from './control/BasicController';
import Dog from './model/Dog';

let doguinho: Dog = new Dog(2, 'test', 0, 'fofo', 5.5);
doguinho.makeNoise();

let startController: BasicController = new BasicController();
startController.startSystem();
