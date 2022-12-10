import { IHashGenerator } from "../../data/utils/interfaces/hash-generator.interface";

export class HashGenerator implements IHashGenerator {
  hash(password: string, salt: number): Promise<string> {
    return Promise.resolve("hashed_password");
  }
}
