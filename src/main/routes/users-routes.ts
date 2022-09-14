import { Router } from 'express'
import { adaptRoute } from '../adapters/express-routes-adapter'
import { makeCreateUserController } from '../factory/controllers/user/create-user/create-user-controller-factory'
import { makeFindAllUsersController } from '../factory/controllers/user/find-all-users/find-all-users-controller-factory'
import { makeShowUserController } from '../factory/controllers/user/show-user/show-user-controller-factory'

const router = Router()

router.post('/', adaptRoute(makeCreateUserController()))
router.get('/', adaptRoute(makeFindAllUsersController()))
router.get('/:id', adaptRoute(makeShowUserController()))

export default router
