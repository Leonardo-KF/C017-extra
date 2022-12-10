import { UserEntity } from "../entities/user.entity";

export interface IDeleteUserUseCase {
  execute(id: string): Promise<UserEntity>;
}
