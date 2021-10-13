import { Request, Response } from 'express'
import { userLoginService } from '../services/services';

class userLoginController {

    logUser(req:Request, res:Response):any {
        let resultado: boolean = false;
        let response: string;
        
        try {
            resultado = userLoginService.autenticarService(req.body);
        }   catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
        response = resultado == false? "error" : "succes"
        return res.status(200).json({login: response})
    }
}

export default new userLoginController();