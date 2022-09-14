import { Router } from 'express'
import { adaptRoute } from '../adapters/express-routes-adapter'
import { makeCreateUserController } from '../factory/controllers/user/create-user/create-user-controller-factory'
import { makeDeleteUserController } from '../factory/controllers/user/delete-user/delete-user-controller-factory'
import { makeFindAllUsersController } from '../factory/controllers/user/find-all-users/find-all-users-controller-factory'
import { makeShowUserController } from '../factory/controllers/user/show-user/show-user-controller-factory'
import { makeUpdateUserController } from '../factory/controllers/user/update-user/update-user-controller-factory'

const router = Router()

router.post('/', adaptRoute(makeCreateUserController()))
router.get('/', adaptRoute(makeFindAllUsersController()))
router.get('/:id', adaptRoute(makeShowUserController()))
router.put('/:id', adaptRoute(makeUpdateUserController()))
router.delete('/:id', adaptRoute(makeDeleteUserController()))

export default router
