export interface IRequest<T = any> {
  params?: string | any;
  body?: T;
  query?: string | any;
}
