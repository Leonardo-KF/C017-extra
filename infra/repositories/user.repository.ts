import { ObjectId } from "mongodb";
import { IUserRepository } from "../../data/repositories/user-repository.data";
import { UserOutputData } from "../../data/types/output";
import { UserInputEntity } from "../../domain/entities/input-data/user-input.entity";
import { UserUpdateInputEntity } from "../../domain/entities/input-data/user-update-input";
import { UserEntity } from "../../domain/entities/user.entity";
import { MongoHelper } from "../helpers/mongo-helper";

export class UserRepository implements IUserRepository {
  async createUser(data: UserEntity): Promise<UserEntity> {
    const userColletion = MongoHelper.getCollection("users");
    const user = await userColletion.insertOne(data);
    const dataToReturn = await this.findUserById(user.insertedId.toHexString());
    return dataToReturn;
  }

  async updateUser(
    data: UserUpdateInputEntity,
    id: string
  ): Promise<UserEntity> {
    const userColletion = MongoHelper.getCollection("users");
    const user = await userColletion.findOneAndUpdate(
      { _id: id },
      { $set: data }
    );
    const dataToReturn = MongoHelper.map(user);

    return dataToReturn;
  }

  async deleteUser(id: string): Promise<UserEntity> {
    const userColletion = MongoHelper.getCollection("users");
    const user = await userColletion.findOneAndDelete({
      _id: new ObjectId(id),
    });
    return MongoHelper.map(user);
  }
  async findUserById(id: string): Promise<UserEntity> {
    const userColletion = MongoHelper.getCollection("users");
    const user = await userColletion.findOne({ _id: new ObjectId(id) });
    return MongoHelper.map(user);
  }
  async findAllUsers(): Promise<UserEntity[]> {
    const userColletion = MongoHelper.getCollection("users");
    const users = await userColletion.find().toArray();
    return MongoHelper.mapCollection(users);
  }
}
