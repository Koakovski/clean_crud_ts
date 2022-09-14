import { Router } from 'express'
import { adaptRoute } from '../adapters/express-routes-adapter'
import { makeCreateUserController } from '../factory/controllers/user/create-user/create-user-controller-factory'
import { makeShowUserController } from '../factory/controllers/user/show-user/show-user-controller-factory'

const router = Router()

router.post('/', adaptRoute(makeCreateUserController()))
router.get('/:id', adaptRoute(makeShowUserController()))

export default router
