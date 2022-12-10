import { UserEntity } from "../entities/user.entity";

export interface IFindUserByIdUseCase {
  execute(id: string): Promise<UserEntity>;
}
