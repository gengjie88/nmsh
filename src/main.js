import Vue from 'vue'
import App from './App.vue'
import './tools/flexible'
import './assets/style/reset.css' //清除默认样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/assets/style/Childpage.css';
import store from './store/index';
import router from './router/index'
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')