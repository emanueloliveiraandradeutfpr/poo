import Animal from './Animal';

export default class Cat extends Animal {
    public makeNoise(): void {
        console.log('Miau Miau');
    }
    public bite(): void {
        console.log('Mordiscando');
    }
}
