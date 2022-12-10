import { UserUpdateInputEntity } from "../../domain/entities/input-data/user-update-input";
import { UserEntity } from "../../domain/entities/user.entity";
import { IUpdateUserUseCase } from "../../domain/use-cases/update-user.usecase";
import { IUserRepository } from "../repositories/user-repository.data";
import { UserUpdateInputData } from "../types/input";
import { UserOutputData } from "../types/output";

export class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute(data: UserUpdateInputData): Promise<UserOutputData> {
    if (!data) {
      throw new Error("Data is required");
    }
    return await this.userRepository.updateUser(data);
  }
}
