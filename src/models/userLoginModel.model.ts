import mailer from './mailer.model';

const dataBase:IUserLogin[] = require( '../../data/userData');

export interface IUserLogin {
    userName:string;
    password:string;
    ip:string;
    mail?:string;
}

export default class userLoginModel implements IUserLogin {

    userName: string;
    password: string;
    ip: string;
    mail?:string;

    constructor(user:IUserLogin) {
        this.userName = user.userName;
        this.password = user.password;
        this.ip = user.ip;
    }

    autenticarCredenciales(): boolean {

        let index:number = dataBase.findIndex(user => user.userName == this.userName);

        if (index >= 0 && dataBase[index].password == this.password)    {
            this.verificarIp(index);
            return true;
        }
        return false;
    }

    verificarIp(index: number) {
        if (index < 0 || dataBase[index].ip == undefined)
            return;

        if (this.ip != dataBase[index].ip && dataBase[index].mail != undefined)
            mailer.sendMail("Te loguiaste desde un dispositivo distinto a la ultima vez, esta todo bien?\n Nueva registrada IP: "+this.ip, dataBase[index].mail!);
    }
}