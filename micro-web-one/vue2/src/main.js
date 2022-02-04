/*
 * @Author: GZH
 * @Date: 2022-02-04 08:51:39
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-04 10:37:52
 * @FilePath: \micro-web-one\vue2\src\main.js
 * @Description:
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
Vue.config.productionTip = false;

let instance = null;

const render = () => {
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount('#app-vue');
};

if (!window.__MICRO_WEB__) {
  render();
}

export async function bootstrap() {
  console.log('bootstrap');
}

export async function mount() {
  render();
}

export async function unmount(ctx) {
  instance.unmount();
  instance = null;
  const { container } = ctx;
  if (container) {
    document.querySelector(container).innerHTML = '';
  }
}
