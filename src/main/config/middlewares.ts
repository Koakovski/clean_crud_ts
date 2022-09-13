import { Express, json } from 'express'
import cors from 'cors'

const setupMiddlewares = (app: Express) => {
  app.use(cors())
  app.use(json())
}

export default setupMiddlewares
