export type TSuccessResponse<T> = {
  success: true;
  data: T;
};

export type TErrorResponse = {
  success: false;
  data: string;
};

export type TResponse<T> = TSuccessResponse<T> | TErrorResponse;
