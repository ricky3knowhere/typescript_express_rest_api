import Router_interface from "./Router_interface"
import { Router, Request, Response } from "express"

import {auth} from "../middlewares/Auth"
import User_controller from "../controllers/User_controller"


class User_route implements Router_interface {
  public router: Router

  constructor(){
    this.router =  Router()
    this.routes()
  }

  public routes(): void {
    this.router.get('/', auth, User_controller.index)
    this.router.post('/', User_controller.create)
    this.router.get('/:id', User_controller.show)
    this.router.put('/:id', User_controller.update)
    this.router.delete('/:id', User_controller.delete)
  }
}

export default new User_route().router