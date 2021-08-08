import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  
  if (!req.headers.authorization) {
    return res.status(401).send("You're have no token!");
  }

  let key = process.env.JWT_TOKEN || "secret";

  const getToken: string = req.headers.authorization.split(" ")[1];

  try {
    const tokenVerify: string | object = jwt.verify(getToken, key);

    if (tokenVerify) {
      req.app.locals.credential = tokenVerify
      
      return next()
    }
    
    console.log(tokenVerify);
    
    return res.send("Invalid Token!");

  } catch (err) {
    return res.send(err);
  }

  // res.send('Unauthotrized!')
};
