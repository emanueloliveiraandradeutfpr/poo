import BasicController from './control/BasicController';
import Doctor from './model/Doctor';
import Dog from './model/Dog';

let doguinho: Dog = new Dog();
doguinho.setName('doguinho');
doguinho.makeNoise();

let startController: BasicController = new BasicController();
startController.startSystem();
