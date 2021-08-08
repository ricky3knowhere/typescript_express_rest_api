import { NextFunction, Request, Response } from "express"
import { check, validationResult } from "express-validator"

let todo_validate: any
export default  todo_validate = [
  check('desc').isString(),
  (req: Request, res: Response, next: NextFunction) => {
    let errors = validationResult(req)

    if (!errors.isEmpty()) {
      res.status(422).send({errors : errors.array()})
    }
    return next()
  }
]