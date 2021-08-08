import Controller_interface from "./Controller_interface";
import { Request, Response } from "express";

let user_data: any[] = [
  { id: 1, name: "mamat basreng" },
  { id: 2, name: "ucok tabok" },
  { id: 3, name: "tatang gudrud" },
  { id: 4, name: "jamet bulog" },
  { id: 5, name: "echi kimochi" },

];

class User_controller implements Controller_interface {
  index(req: Request, res: Response): Response {
    return res.send(user_data);
  }
  create(req: Request, res: Response): Response {

    user_data.push(req.body)

    return res.send('Data succcess created.')
    
  }
  show(req: Request, res: Response): Response {
    let { id } = req.params
    
    let person = user_data.find((item) => item.id == id)
    
    return res.send(person)
    
  }
  
  update(req: Request, res: Response): Response {
    let { id } = req.params
    
    let person = user_data.find((item) => item.id == id)
    person.name = req.body.name
    
    return res.send(person +'<br>Data succcess updated.')
    
  }
  
  delete(req: Request, res: Response): Response {
    let { id } = req.params
    
    let person = user_data.filter((item) => item.id != id)

    return res.send(person)
  }
}

export default new User_controller();
