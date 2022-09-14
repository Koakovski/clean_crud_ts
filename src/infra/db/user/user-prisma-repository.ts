import { ICreateUserRepository } from '@/data/protocols/create-user-repository'
import { IFindUserByEmailRepository } from '@/data/protocols/find-user-by-email-repository'
import { UserModel } from '@/domain/models/user'
import { CreateUserParams, ICreateUser } from '@/domain/usecases/user/create-user'
import { IFindUserByEmail } from '@/domain/usecases/user/find-user-by-email'
import { PrismaClient } from '@prisma/client'
import { PrismaHelper } from '../helpers/prisma-helpers'

export class UserPrismaRepository implements IFindUserByEmailRepository, ICreateUserRepository {
  private prismaClient = new PrismaClient()

  async findByEmail (email: string): Promise<UserModel | null> {
    const user = await this.prismaClient.user.findFirst({ where: { email } })
    return user && PrismaHelper.map(user)
  }

  async createUser (createUserParams: CreateUserParams): Promise<UserModel> {
    const { name, email } = createUserParams
    const user = await this.prismaClient.user.create({
      data: { name, email }
    })

    return user && PrismaHelper.map(user)
  }
}
