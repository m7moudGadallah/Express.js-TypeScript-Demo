interface IPaginationObj {
  page: number;
  pageSize: number;
}

interface IPagination {
  prev?: IPagination;
  next?: IPagination;
}

interface IResponsePayload<T> {
  token?: string;
  otp?: string;
  data?: {
    count?: T extends any[] ? number : never;
    pagination?: T extends any[] ? IPagination : never;
    content: T;
  };
}

interface IResponseError {
  status?: 'fail' | 'error';
  message?: string;
}

interface IJsonResponse<T> {
  success: boolean;
  message: string;
  payload?: IResponsePayload<T>;
  error?: IResponseError;
}

export {
  IJsonResponse,
  IPagination,
  IPaginationObj,
  IResponseError,
  IResponsePayload,
};
