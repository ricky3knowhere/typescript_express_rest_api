import { Request, Response } from "express";
import Authentication from "../utils/Authentication";

const db = require("../db/models");

class Auth_controller {
  register = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;

    let hashedPassword: string = await Authentication.hash(password);

    await db.User.create({ username, password: hashedPassword });

    return res.send("User success inserted...");
  };

  login = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;

    let user = await db.User.findOne({ where: { username } });

    let status = await Authentication.compare(password, user.password);

    // if (user) {
    //   let status = await Authentication.compare(password, user.password)

    //   return res.send(status)
    // }
console.log(status);

    if (status) {
      let token = await Authentication.generateToken(
        user.id,
        username,
        user.password
      );
      return res.send({ token });
    }

    return res.send("failed to create token!");
  };

  profile = (req: Request, res: Response) => {
    
    let token = req.app.locals.credential
    
    return res.send(token)
  }
}

export default new Auth_controller();
