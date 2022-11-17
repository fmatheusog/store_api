import { PrismaClient } from '@prisma/client';
import User from "../../../entities/User";
import UserRepository from "../../UserRepository.interface";

export default class UserRepositoryImpl implements UserRepository {
  private prisma = new PrismaClient();

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users as User[];
  }
  async findById(id: number): Promise<User> {
    const user = await this.prisma.user.findFirstOrThrow({
      where: {
        id: id
      }
    });

    return user as User;
  }

  async create(entity: User): Promise<User> {
    const newUser = await this.prisma.user.create({
      data: {
        name: entity.name,
        username: entity.username,
        password: entity.password,
        admin: entity.admin
      }
    });

    return newUser as User;
  }
  async updateById(id: number, entity: User): Promise<boolean> {
    await this.prisma.user.update({
      data: {
        name: entity.name,
        username: entity.username,
        password: entity.password,
        admin: entity.admin,
      },
      where: {
        id: id
      }
    })

    return true;
  }
  async deleteById(id: number): Promise<boolean> {
    await this.prisma.user.delete({
      where: {
        id: id
      }
    })

    return true;
  }

}