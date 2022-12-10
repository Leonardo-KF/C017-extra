export interface IResponse<T> {
  statusCode: number;
  body: T;
}
