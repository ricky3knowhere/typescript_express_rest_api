import { Request } from "express"
const db = require('../db/models')

class Todo_services {

  credential: { id: number}
  body: Request['body']
  params: Request['params']


  constructor(req: Request) {
    this.credential = req.app.locals.credential
    this.body = req.body
    this.params = req.params
  }

  getAll = async () => {
    const { id } = this.credential

    const todo_list = await db.todo.findAll({ where: { user_id: id }, attributes: ['id', 'desc'] })

    return todo_list;
  }

  getOne = async () => {
    const { id } = this.params
    const { id: user_id } = this.credential

    const todo = await db.todo.findOne({ where: { id, user_id }})
    
    return todo
  }

  store = async () => {
    const { desc } = this.body
    const { id } = this.credential

    const todo = await db.todo.create({ user_id: id, desc })
    
    return todo
  }

  update = async () => {
      
    const { id } = this.params
    const { id: user_id } = this.credential
    const { desc } = this.body

    const todo = await db.todo.update({desc }, { where: { id, user_id }})
    
    return todo
  }

  delete = async () => {
    const { id } = this.params
    const { id: user_id } = this.credential

    const todo = await db.todo.destroy({ where: { id, user_id } })

    return todo
  }
}

export default Todo_services