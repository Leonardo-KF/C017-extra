import { IUserRepository } from "../../data/repositories/user-repository.data";
import { UserOutputData } from "../../data/types/output";
import { UserInputEntity } from "../../domain/entities/input-data/user-input.entity";
import { UserUpdateInputEntity } from "../../domain/entities/input-data/user-update-input";
import { UserEntity } from "../../domain/entities/user.entity";
import { MongoHelper } from "../helpers/mongo-helper";

export class UserRepository implements IUserRepository {
  private data: UserOutputData[] = [];
  async createUser(data: UserEntity): Promise<UserEntity> {
    this.data.push(data);
    return data;
    // const userColletion = MongoHelper.getCollection("users");
    // const user = await userColletion.insertOne(data);
    // const dataToReturn = MongoHelper.map(user);
    // return dataToReturn;
  }

  updateUser(data: UserUpdateInputEntity): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  deleteUser(id: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  findUserById(id: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  findAllUsers(): Promise<UserEntity[]> {
    throw new Error("Method not implemented.");
  }
}
