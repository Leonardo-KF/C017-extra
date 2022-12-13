import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5431,
  username: "admin",
  password: "supersenha",
  database: "backc017",
  entities: ["./models/user.model.ts"],
  logging: true,
  synchronize: true,
});
