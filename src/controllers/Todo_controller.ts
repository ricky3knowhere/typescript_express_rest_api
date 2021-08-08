import Controller_interface from "./Controller_interface";
import { Request, Response } from "express";

import Todo_services  from "../services/Todo_services";

class Todo_controller implements Controller_interface {

  index = async (req: Request, res: Response): Promise<Response> =>  {
    
    const service = new Todo_services(req)
    const todo_list = await service.getAll()
    
    return res.send(todo_list);
  }

  create = async (req: Request, res: Response): Promise<Response> => {

    const service = new Todo_services(req)
    const todo = await service.store()
    
    return res.send({
      'data': todo,
      'message': 'Todo added successfully...'
    })
    
  }

  show = async (req: Request, res: Response): Promise<Response> =>{
    
    const service = new Todo_services(req)
    const todo = await service.getOne()
    
    return res.send(todo)
    
  }
  
  update = async (req: Request, res: Response): Promise<Response> =>{
    
    const service = new Todo_services(req)
    await service.update()

    return res.send({
      'data': '',
      'message': 'todo updated successfuly.'
    })
    
  }
  
  delete = async (req: Request, res: Response): Promise<Response> =>{
    
    const service = new Todo_services(req)
    await service.delete()

    return res.send({
      'data': '',
      'message': 'todo deleted successfuly.'
    })
  }
}

export default new Todo_controller();
