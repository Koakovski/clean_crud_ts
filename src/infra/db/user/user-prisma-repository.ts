import { ICreateUserRepository } from '@/data/protocols/create-user-repository'
import { IDeleteUserByIdRepository } from '@/data/protocols/delete-user-by-id-repository'
import { IFindAllUsersRepository } from '@/data/protocols/find-all-users-repository'
import { IFindUserByCpfRepository } from '@/data/protocols/find-user-by-cpf-repository'
import { IFindUserByEmailRepository } from '@/data/protocols/find-user-by-email-repository'
import { IFindUserByIdRepository } from '@/data/protocols/find-user-by-id-repository'
import { IUpdateUserByIdRepository } from '@/data/protocols/update-user-by-id-repository'
import { UserModel } from '@/domain/models/user'
import { CreateUserParams } from '@/domain/usecases/user/create-user'
import { UpdateUserParams } from '@/domain/usecases/user/update-user'
import { PrismaClient } from '@prisma/client'
import { PrismaHelper } from '../helpers/prisma-helpers'

export class UserPrismaRepository implements
  ICreateUserRepository,
  IFindUserByEmailRepository,
  IFindUserByCpfRepository,
  IFindUserByIdRepository,
  IFindAllUsersRepository,
  IDeleteUserByIdRepository,
  IUpdateUserByIdRepository {
  private prismaClient = new PrismaClient()

  async createUser (createUserParams: CreateUserParams): Promise<UserModel> {
    const { name, email, cpf } = createUserParams
    const user = await this.prismaClient.user.create({
      data: { name, email, cpf }
    })

    return user && PrismaHelper.map(user)
  }

  async findByEmail (email: string): Promise<UserModel | null> {
    const user = await this.prismaClient.user.findFirst({ where: { email } })
    return user && PrismaHelper.map(user)
  }

  async findByCpf (cpf: string): Promise<UserModel | null> {
    const user = await this.prismaClient.user.findFirst({ where: { cpf } })
    return user && PrismaHelper.map(user)
  }

  async findById (id: string): Promise<UserModel | null> {
    const user = await this.prismaClient.user.findFirst({ where: { id: Number(id) } })
    return user && PrismaHelper.map(user)
  }

  async findAll (): Promise<UserModel[]> {
    const users = await this.prismaClient.user.findMany()
    return PrismaHelper.mapAll(users)
  }

  async deleteById (id: string): Promise<void> {
    await this.prismaClient.user.delete({ where: { id: Number(id) } })
  }

  async updateById (id: string, updateUserParams: UpdateUserParams): Promise<UserModel> {
    const { name, email, cpf } = updateUserParams

    const user = await this.prismaClient.user.update({
      where: { id: Number(id) },
      data: { name, email, cpf }
    })

    return PrismaHelper.map(user)
  }

}
