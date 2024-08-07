import Human from './Human';

export default class Doctor extends Human {
    constructor(
        name: string,
        age: number,
        id: number,
        crmv: string,
        specialization: string,
    ) {
        super(name, age, id);
        this.crmv = crmv;
        this.specialization = specialization;
    }
    private crmv: string = '';
    private specialization: string = '';

    public getCrmv(): string {
        return this.crmv;
    }
    public setCrmv(crmv: string): void {
        this.crmv = crmv;
    }

    public getSpecialization(): string {
        return this.specialization;
    }
    public setSpecialization(specialization: string): void {
        this.specialization = specialization;
    }

    sayHello(): void {
        console.log('Ola paciente');
    }
}
