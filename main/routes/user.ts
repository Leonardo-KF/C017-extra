import { Router } from "express";
import { adaptRoute } from "../adapters/express-router";
import { makeCreateUserController } from "../factories/make-create-user";

export default (router: Router): void => {
  router.post("/create-user", adaptRoute(makeCreateUserController()));
};
