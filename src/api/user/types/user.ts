import type { ApiResponseData } from '@/api/types/index';

export type UserInfoResponseData = ApiResponseData<{ username: string; roles: string[] }>;
