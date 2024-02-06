import request from '@/utils/request';
import type { UserInfoResponseData } from './types/user';

/** 获取用户详情 */
export function getUserInfoApi() {
  return request<UserInfoResponseData>({
    url: '/users/info',
    method: 'get'
  });
}
