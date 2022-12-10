import { CreateUserController } from "./presentation/controllers/create-user.controller";
import { CreateUserUseCase } from "./data/use-cases/create-user.usecase";
import { UserRepository } from "./infra/repositories/user.repository";
import { HashGenerator } from "./infra/helpers/hash-helper";

const userRepository = new UserRepository();
const hashGenerator = new HashGenerator();
const createUserUseCase = new CreateUserUseCase(userRepository, hashGenerator);
const createUserController = new CreateUserController(createUserUseCase);

async function main() {
  const data = await createUserController.handle({
    body: { name: "John Doe", email: "teste", password: "123" },
  });
  console.log(data);
}

main();
