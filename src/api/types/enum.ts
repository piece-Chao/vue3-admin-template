/**
 * @description: 响应状态码
 */
export enum ResultStatusEnum {
  SUCCESS = 200,
  CLIENT_ERROR = 400,
  TOKEN_EXPIRE = 401,
  PERMISSION_ERROR = 403,
  URL_ERROR = 404,
  TIMEOUT_ERROR = 408,
  SERVER_ERROR = 500,
  GETWAY_ERROR = 502,
  GETWAY_TIMEOUT_ERROR = 504
}

export enum ResultCodeEnum {
  SUCCESS = 0,
  ERROR = -1
}

/**
 * @description: 请求方法
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

/**
 * @description:  常用的contentTyp类型
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // json
  TEXT = 'text/plain;charset=UTF-8',
  // form-data 一般配合qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  上传
  FORM_DATA = 'multipart/form-data;charset=UTF-8'
}
