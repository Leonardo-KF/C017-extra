import { IController } from "../../presentation/controllers/abstract/controller";
import { Request, Response } from "express";

export const adaptRoute = (controller: IController<any, any>) => {
  return async (req: Request, res: Response) => {
    const request = {
      body: req.body || {},
      params: req.params || {},
      query: req.query || {},
    };
    const response = await controller.handle(request);
    res.status(response.statusCode).json(response.body);
  };
};
