import { ref } from 'vue';
import store from '../index';
import { defineStore } from 'pinia';
import { userStoreId } from '../storeIds';

export const useUserStore = defineStore(userStoreId, () => {
  const userInfo = ref();

  const setUserInfo = (info: any) => {
    userInfo.value = info;
  };

  return { userInfo, setUserInfo };
});

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store);
}
