<template>
  <div class="login-box">
    <div class="login-logo">
      <!-- <svg-icon name="logo" :size="45" /> -->
      <h1 class="mb-0 ml-2 text-3xl font-bold">vue3-Admin-template</h1>
    </div>
    <a-form layout="horizontal" :model="state.formInline" @submit.prevent="handleSubmit">
      <a-form-item>
        <a-input v-model:value="state.formInline.username" size="large" placeholder="rootadmin">
          <template #prefix><user-outlined type="user" /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value="state.formInline.password"
          size="large"
          type="password"
          placeholder="123456"
          autocomplete="new-password"
        >
          <template #prefix><lock-outlined type="user" /></template>
        </a-input>
      </a-form-item>
      <!-- <a-form-item>
        <a-input
          v-model:value="state.formInline.verifyCode"
          placeholder="验证码"
          :maxlength="4"
          size="large"
        >
          <template #prefix><SafetyOutlined /></template>
          <template #suffix @click="setCaptcha">
            <img
              :src="state.captcha"
              class="absolute right-0 h-full cursor-pointer"

            />
          </template>
        </a-input>
      </a-form-item> -->
      <a-form-item>
        <a-button type="primary" html-type="submit" size="large" :loading="state.loading" block> 登录 </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import { useAuthStore } from '@/store/modules/auth';
import { loginApi } from '@/api/login/index';

const state = reactive({
  loading: false,
  formInline: {
    username: 'admin',
    password: 'a123456',
    verifyCode: ''
  }
});

const router = useRouter();

const authStore = useAuthStore();

// const setCaptcha = async () => {
//   const data = await Api.captcha.captchaCaptchaByImg({ width: 100, height: 50 });
//   state.captcha = data.img;
//   state.formInline.captchaId = data.id;
// };
// setCaptcha();

const handleSubmit = async () => {
  const { username, password } = state.formInline;
  if (username.trim() == '' || password.trim() == '') {
    return message.warning('用户名或密码不能为空！');
  }
  const { data } = await loginApi(state.formInline);
  if (data.code === 0) {
    authStore.setToken(data.data.token);
    router.push('/');
  }
  state.loading = true;
  message.loading('登录中...', 0);
  state.loading = false;
  message.destroy();
};
</script>

<style lang="scss" scoped>
.login-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-top: 240px;
  background: url('@/assets/login.svg');
  background-size: 100%;

  .login-logo {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .svg-icon {
      font-size: 48px;
    }
  }

  :deep(.ant-form) {
    width: 400px;

    .ant-col {
      width: 100%;
    }

    .ant-form-item-label {
      padding-right: 6px;
    }
  }
}
</style>
