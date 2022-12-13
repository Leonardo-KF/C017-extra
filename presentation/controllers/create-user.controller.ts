import { IController } from "./abstract/controller";
import { UserInputData } from "../../data/types/input";
import { UserOutputData } from "../../data/types/output";
import { IRequest } from "./abstract/request";
import { IResponse } from "./abstract/response";
import { ICreateUserUseCase } from "../../domain/use-cases/create-user.usecase";

export class CreateUserController
  implements IController<UserInputData, UserInputData>
{
  constructor(private readonly createUserUseCase: ICreateUserUseCase) {}
  async handle(
    request: IRequest<UserInputData>
  ): Promise<IResponse<UserOutputData>> {
    if (!request.body) {
      throw new Error("Request body is required");
    }
    const { name, email, password } = request.body;
    const createdUser = await this.createUserUseCase.execute({
      name,
      email,
      password,
    });

    return {
      statusCode: 201,
      body: createdUser,
    };
  }
}
