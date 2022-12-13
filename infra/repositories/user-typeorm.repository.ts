import { IUserRepository } from "../../data/repositories/user-repository.data";
import { UserInputEntity } from "../../domain/entities/input-data/user-input.entity";
import { UserUpdateInputEntity } from "../../domain/entities/input-data/user-update-input";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserModel } from "../typeOrm/models/user.model";
import { dataSource } from "../typeOrm/typeOrm";

export class UserRepositoryTypeOrm implements IUserRepository {
  async createUser(data: UserEntity): Promise<UserEntity> {
    return await dataSource.getRepository(UserModel).save(data);
  }
  async updateUser(
    data: UserUpdateInputEntity,
    id: string
  ): Promise<UserEntity> {
    const userUpdated = await dataSource
      .getRepository(UserModel)
      .update(id, data);
    return userUpdated.raw;
  }
  async deleteUser(id: string): Promise<UserEntity> {
    return await (
      await dataSource.getRepository(UserModel).delete(id)
    ).raw;
  }
  async findUserById(id: string): Promise<UserEntity> {
    return await dataSource.getRepository(UserModel).findOne({ where: { id } });
  }
  async findAllUsers(): Promise<UserEntity[]> {
    return await dataSource.getRepository(UserModel).find();
  }
}
