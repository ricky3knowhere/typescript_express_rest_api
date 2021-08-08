import { Request, Response } from "express";

export default interface Controller_interface {
  index(req:Request, res: Response): Response | Promise<Response>
  create(req:Request, res: Response): Response | Promise<Response>
  update(req:Request, res: Response): Response | Promise<Response>
  delete(req:Request, res: Response): Response | Promise<Response>
}