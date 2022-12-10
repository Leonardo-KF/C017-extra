export interface IRequest<T> {
  params?: string;
  body?: T;
  query?: string;
}
