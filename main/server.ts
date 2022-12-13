import { MongoHelper } from "../infra/helpers/mongo-helper";
import { setupApp } from "./config/app";
import { env } from "./config/env";
import { dataSource } from "../infra/typeOrm/typeOrm";

dataSource.initialize().then(() => {
  console.log("Connected to MongoDB");
  const app = setupApp();
  app.listen(env.port, () => {
    console.log(`Server running on port ${env.port}`);
  });
});
