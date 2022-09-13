import { Express, Request, Response } from 'express'

import userRoutes from '../routes/users-routes'

const setupRoutes = (app: Express) => {
  app.use('/users', userRoutes)
}

export default setupRoutes
