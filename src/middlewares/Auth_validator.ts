import { NextFunction, Request, Response } from "express"
import { check, validationResult } from "express-validator"

let validate: any
export default  validate = [
  check('username').isString(),
  check('password').isLength({ min: 6 }),
  (req: Request, res: Response, next: NextFunction) => {
    let errors = validationResult(req)

    if (!errors.isEmpty()) {
      res.status(422).send({errors : errors.array()})
    }
    return next()
  }
]