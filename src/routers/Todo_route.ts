import Router_interface from "./Router_interface"
import { Router, Request, Response } from "express"

import {auth} from "../middlewares/Auth"
import Todo_controller from "../controllers/Todo_controller"

import todo_validate from "../middlewares/Todo_validator";


class Todo_route implements Router_interface {
  public router: Router

  constructor(){
    this.router =  Router()
    this.routes()
  }

  public routes(): void {
    this.router.get('/', auth, Todo_controller.index)
    this.router.post('/', auth, todo_validate, Todo_controller.create)
    this.router.get('/:id', auth, Todo_controller.show)
    this.router.put('/:id', auth, todo_validate, Todo_controller.update)
    this.router.delete('/:id', auth,Todo_controller.delete)
  }
}

export default new Todo_route().router