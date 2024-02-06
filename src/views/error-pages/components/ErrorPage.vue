<template>
  <a-result :status="status" :title="title" :sub-title="subTitle">
    <template #extra>
      <a-button @click="goBackHome" type="primary">返回首页</a-button>
    </template>
  </a-result>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
withDefaults(
  defineProps<{
    status: string;
    title: string;
    subTitle: string;
  }>(),
  {
    status: '',
    title: '',
    subTitle: ''
  }
);
const goBackHome = () => {
  router.push('/');
};
</script>
