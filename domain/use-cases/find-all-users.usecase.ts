import { UserEntity } from "../entities/user.entity";

export interface IFindAllUsersUseCase {
  execute(id: number): Promise<UserEntity[]>;
}
