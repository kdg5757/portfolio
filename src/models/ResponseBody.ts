export type ResponseBody<T> = {
  code: string;
  data: T;
  msg: string;
};

export type CommonErrorResponse = {
  title: string;
  message: string;
};
