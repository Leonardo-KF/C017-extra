import express, { Express } from "express";
import { useMidlewares } from "./midlewares";
import { useRoutes } from "./routes";

export const setupApp = (): Express => {
  const app = express();
  useMidlewares(app);
  useRoutes(app);
  return app;
};
