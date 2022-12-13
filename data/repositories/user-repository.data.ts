import { UserInputData, UserUpdateInputData } from "../types/input";
import { UserOutputData } from "../types/output";

export interface IUserRepository {
  createUser(data: UserInputData): Promise<UserOutputData>;
  updateUser(data: UserUpdateInputData, id: string): Promise<UserOutputData>;
  deleteUser(id: string): Promise<UserOutputData>;
  findUserById(id: string): Promise<UserOutputData>;
  findAllUsers(): Promise<UserOutputData[]>;
}
