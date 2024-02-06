import { createApp } from 'vue';
import store from '@/store/index';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import router from '@/router/index';
import '@/styles/index.scss';

const app = createApp(App);

app.use(store).use(Antd).use(router);
router.isReady().then(() => {
  app.mount('#app');
});
