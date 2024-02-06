import request from '@/utils/request';
import type { LoginCodeResponseData, LoginRequestData, LoginResponseData } from './types/login';

/** 获取登录验证码 */
export function getLoginCodeApi() {
  return request<LoginCodeResponseData>({
    url: '/login/code',
    method: 'get'
  });
}

/** 登录并返回 Token */
export function loginApi(data: LoginRequestData) {
  return request<LoginResponseData>({
    url: '/users/login',
    method: 'post',
    data
  });
}

/** 退出登录 */
export function logoutApi() {
  return request({
    url: '/users/logout',
    method: 'post'
  });
}
