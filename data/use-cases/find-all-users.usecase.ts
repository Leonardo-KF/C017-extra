import { IFindAllUsersUseCase } from "../../domain/use-cases/find-all-users.usecase";
import { IUserRepository } from "../repositories/user-repository.data";
import { UserOutputData } from "../types/output";

export class findAllUsersUseCase implements IFindAllUsersUseCase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute(): Promise<UserOutputData[]> {
    return await this.userRepository.findAllUsers();
  }
}
