import { CreateUserController } from "./presentation/controllers/create-user.controller";
import { CreateUserUseCase } from "./data/use-cases/create-user.usecase";
import { UserRepository } from "./infra/repositories/user.repository";
import { HashGenerator } from "./infra/helpers/hash-helper";
import { MongoHelper } from "./infra/helpers/mongo-helper";
import "dotenv/config";

const userRepository = new UserRepository();
const hashGenerator = new HashGenerator();
const createUserUseCase = new CreateUserUseCase(userRepository, hashGenerator);
const createUserController = new CreateUserController(createUserUseCase);

MongoHelper.connect(process.env.MONGO_URL ?? "").then(async () => {
  const data = await createUserController.handle({
    body: {
      email: "test",
      password: "test",
      name: "test",
    },
  });
  console.log(data);
});
