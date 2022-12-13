import { bodyParser } from "../midlewares/body-parser";
import { contentType } from "../midlewares/content-type";
import { cors } from "../midlewares/cors";
import { Express } from "express";

export const useMidlewares = (app: Express): void => {
  app.use(bodyParser);
  app.use(cors);
  app.use(contentType);
};
