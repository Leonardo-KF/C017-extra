import { UserUpdateInputEntity } from "../entities/input-data/user-update-input";
import { UserEntity } from "../entities/user.entity";

export interface IUpdateUserUseCase {
  execute(data: UserUpdateInputEntity): Promise<UserEntity>;
}
