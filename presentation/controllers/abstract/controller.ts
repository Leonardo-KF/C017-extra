import { IRequest } from "./request";
import { IResponse } from "./response";

export interface IController<I = any, O = any> {
  handle(request: IRequest<I>): Promise<IResponse<O>>;
}
