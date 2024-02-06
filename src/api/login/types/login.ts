import type { ApiResponseData } from '@/api/types/index';

export interface LoginRequestData {
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
  /** 验证码 */
  verifyCode: string;
}

export type LoginCodeResponseData = ApiResponseData<string>;

export type LoginResponseData = ApiResponseData<{ token: string }>;
