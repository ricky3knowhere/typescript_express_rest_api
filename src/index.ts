import express, {Application, Request, Response} from 'express'
import bodyParser from 'body-parser'

import morgan from 'morgan'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'

import { config as dotenv } from 'dotenv'

import User_route from './routers/User_route'
import Auth_route from './routers/Auth_route'
import Todo_route from './routers/Todo_route'

class App {
  public app: Application

  constructor(){
    this.app = express()
    this.plugins()
    this.routes()
    dotenv()
  }


  protected plugins() {
    // this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(bodyParser.json())
    this.app.use(morgan('dev'))
    this.app.use(compression())
    this.app.use(helmet())
    this.app.use(cors())
  }

  protected routes(): void {
    this.app.route('/').get((req:Request, res:Response) => {
      
      res.send('Server is running...')
    })

    this.app.use('/api/v1/users', User_route)
    this.app.use('/api/v1/auth', Auth_route)
    this.app.use('/api/v1/todos', Todo_route)

  }
}

const port: number = 8000

const server = new App().app

server.listen(port, () => console.log('Running..., with ', process.env.DB_HOST))
