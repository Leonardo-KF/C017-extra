import { randomUUID } from "node:crypto";
import { ICreateUserUseCase } from "../../domain/use-cases/create-user.usecase";
import { IUserRepository } from "../repositories/user-repository.data";
import { UserInputData } from "../types/input";
import { UserOutputData } from "../types/output";
import { IHashGenerator } from "../utils/interfaces/hash-generator.interface";

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly hashGenerator: IHashGenerator
  ) {}
  async execute(data: UserInputData): Promise<UserOutputData> {
    if (!data.email || !data.password || !data.name) {
      throw new Error("Missing params");
    }
    const hashedPassword = await this.hashGenerator.hash(data.password, 10);
    const user: UserOutputData = {
      id: randomUUID(),
      email: data.email,
      password: hashedPassword,
      name: data.name,
    };
    return await this.userRepository.createUser(user);
  }
}
