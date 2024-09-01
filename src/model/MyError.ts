import Doctor from './Doctor';

export default class MyError extends Error {
    constructor(error: string) {
        super(error + '\n Ocurred um error em doctor');
    }
}
