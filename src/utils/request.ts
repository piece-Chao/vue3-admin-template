import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { useAuthStore } from '@/store/modules/auth';

const authStore = useAuthStore();

const logout = () => {
  authStore.removeToken();
  location.reload();
};

const controller = new AbortController();
// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  signal: controller.signal,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  data: {}
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (authStore.token) {
      config.headers['Authorization'] = `Bearer ${authStore.token}`;
    }
    if (config.url) {
      config.url = config.url.replaceAll('//', '/');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // apiData 是 api 返回的数据
    const apiData = response.data;
    // 二进制数据则直接返回
    const responseType = response.request?.responseType;
    if (responseType === 'blob' || responseType === 'arraybuffer') return apiData;
    // 这个 code 是和后端约定的业务 code
    const code = apiData.code;
    // 如果没有 code, 代表这不是项目后端开发的 api
    if (code === undefined) {
      // ElMessage.error("非本系统的接口")
      return Promise.reject(new Error('非本系统的接口'));
    }
    switch (code) {
      case 0:
        // 本系统采用 code === 0 来表示没有业务错误
        return apiData;
      case 401:
        // Token 过期时
        return logout();
      default:
        // 不是正确的 code
        // ElMessage.error(apiData.message || "Error")
        return Promise.reject(new Error('Error'));
    }
  },
  (error) => {
    // status 是 HTTP 状态码
    const status = error?.response?.status;
    switch (status) {
      case 400:
        error.message = '请求错误';
        break;
      case 401:
        // Token 过期时
        // logout()
        break;
      case 403:
        error.message = '拒绝访问';
        break;
      case 404:
        error.message = '请求地址出错';
        break;
      case 408:
        error.message = '请求超时';
        break;
      case 500:
        error.message = '服务器内部错误';
        break;
      case 501:
        error.message = '服务未实现';
        break;
      case 502:
        error.message = '网关错误';
        break;
      case 503:
        error.message = '服务不可用';
        break;
      case 504:
        error.message = '网关超时';
        break;
      case 505:
        error.message = 'HTTP 版本不受支持';
        break;
      default:
        break;
    }

    return Promise.reject(error);
  }
);

// 导出 axios 实例
export default service;
