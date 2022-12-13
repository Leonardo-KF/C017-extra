import { UserInputData } from "../../data/types/input";
import { UserOutputData } from "../../data/types/output";
import { CreateUserUseCase } from "../../data/use-cases/create-user.usecase";
import { HashGenerator } from "../../infra/helpers/hash-helper";
// import { UserRepository } from "../../infra/repositories/user.repository";
import { UserRepositoryTypeOrm } from "../../infra/repositories/user-typeorm.repository";
import { IController } from "../../presentation/controllers/abstract/controller";
import { CreateUserController } from "../../presentation/controllers/create-user.controller";

export const makeCreateUserController = (): IController<
  UserInputData,
  UserOutputData
> => {
  const userRepository = new UserRepositoryTypeOrm();
  const hashGenerator = new HashGenerator();
  const createUserUseCase = new CreateUserUseCase(
    userRepository,
    hashGenerator
  );
  const createUserController = new CreateUserController(createUserUseCase);
  return createUserController;
};
