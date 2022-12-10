export interface IHashGenerator {
  hash(password: string, salt: number): Promise<string>;
}
