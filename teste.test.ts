import { IUserRepository } from "data/repositories/user-repository.data";
import { IHashGenerator } from "data/utils/interfaces/hash-generator.interface";
import { UserUpdateInputEntity } from "domain/entities/input-data/user-update-input";
import { UserEntity } from "domain/entities/user.entity";
import { UserRepository } from "infra/repositories/user.repository";
import { describe, expect, it } from "vitest";
import { CreateUserUseCase } from "./data/use-cases/create-user.usecase";

class UserRepositorySpy implements IUserRepository {
  private users = [];
  createUser(data: UserEntity): Promise<UserEntity> {
    this.users.push(data);
    return Promise.resolve(data);
  }
  updateUser(data: UserUpdateInputEntity, id: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  deleteUser(id: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  findUserById(id: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  findAllUsers(): Promise<UserEntity[]> {
    throw new Error("Method not implemented.");
  }
}

class hashGeneratorSpy implements IHashGenerator {
  hash(password: string, salt: number): Promise<string> {
    return Promise.resolve("hashedPassword");
  }
}

// system under test

const makeSut = () => {
  const UserRepository = new UserRepositorySpy();
  const hashGenerator = new hashGeneratorSpy();
  const sut = new CreateUserUseCase(UserRepository, hashGenerator);
  return {
    sut: sut,
  };
};

describe("CreateUserUseCase", () => {
  it("should be create a new user", async () => {
    const { sut } = makeSut();

    const createUserData = {
      name: "any_name",
      email: "any_email",
      password: "any_password",
    };
    const user = await sut.execute(createUserData);

    expect(user.email).toBe(user.email);
  });
  it("should be a generate id for a new User", async () => {
    const { sut } = makeSut();

    const createUserData = {
      name: "any_name",
      email: "any_email",
      password: "any_password",
    };
    const user = await sut.execute(createUserData);

    expect(user.id).toBeDefined();
  });
  it("should be throw a error if data is invalid", async () => {
    const { sut } = makeSut();

    const createUserData = {
      name: "",
      email: "",
      password: "",
    };

    try {
      await sut.execute(createUserData);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });
});
