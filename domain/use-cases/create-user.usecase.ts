import { UserInputEntity } from "../entities/input-data/user-input.entity";
import { UserEntity } from "../entities/user.entity";

export interface ICreateUserUseCase {
  execute(data: UserInputEntity): Promise<UserEntity>;
}
