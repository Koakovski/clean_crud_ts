import { Router } from 'express'
import { adaptRoute } from '../adapters/express-routes-adapter'
import { makeCreateUserController } from '../factory/controllers/user/create-user/create-user-controller-factory'

const router = Router()

router.post('/', adaptRoute(makeCreateUserController()))

export default router
