import { ref } from 'vue';
import store from '../index';
import { defineStore } from 'pinia';
import { authStoreId } from '../storeIds';

export const useAuthStore = defineStore(authStoreId, () => {
  const token = ref();

  const setToken = (info) => {
    token.value = info;
    localStorage.setItem('token', token.value);
  };

  const removeToken = () => {
    token.value = '';
    localStorage.removeItem('token');
  };

  return { token, setToken, removeToken };
});

/** 在 setup 外使用 */
export function useAuthStoreHook() {
  return useAuthStore(store);
}
