import Router_interface from "./Router_interface";
import { Router, Request, Response } from "express";
import Auth_controller from "../controllers/Auth_controller";

import validate from "../middlewares/Auth_validator";
import { auth } from "../middlewares/Auth";

class Auth_route implements Router_interface {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.post("/register", validate, Auth_controller.register);
    this.router.post("/login", validate, Auth_controller.login);
    this.router.get("/profile", auth, Auth_controller.profile);
  }
}

export default new Auth_route().router;
