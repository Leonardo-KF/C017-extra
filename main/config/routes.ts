import { Express, Router } from "express";
import { readdirSync } from "fs";
import { join } from "path";

export const useRoutes = (app: Express): void => {
  const router = Router();
  app.use("/users", router);
  readdirSync(join(__dirname, "../routes")).map(async (file) => {
    if (!file.endsWith(".map")) {
      console.log(file);
      (await import(`../routes/${file}`)).default(router);
    }
  });
};
