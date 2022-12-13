import { IHashGenerator } from "../../data/utils/interfaces/hash-generator.interface";
import { hash } from "bcrypt";

export class HashGenerator implements IHashGenerator {
  async hash(password: string, salt: number): Promise<string> {
    return await hash(password, salt);
  }
}
