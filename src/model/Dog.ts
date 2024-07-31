import Animal from './Animal';

export default class Dog extends Animal {
    public makeNoise():void {
        console.log('Au Au!');
    }
    public bite(): void {
        console.log('Mordendo');
    }
}
