import { IRequest } from "./request";
import { IResponse } from "./response";

export interface IController<I, O> {
  handle(request: IRequest<I>): Promise<IResponse<O>>;
}
