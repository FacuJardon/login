import { userLoginModel, IUserLogin } from '../models/models'

class userLoginService {

    autenticarService(credenciales:IUserLogin): boolean {
        let userLoginCredenciales = new userLoginModel(credenciales);

        if (userLoginCredenciales.autenticarCredenciales())
            return true;
        return false;
    }
}

export default new userLoginService();