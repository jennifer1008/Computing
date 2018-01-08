// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import map from './map.js';
 
import iView from 'iview';
import 'iview/dist/styles/iview.css'; 
import './assets/scss/index.scss';
import './assets/font/iconfont.css';
Vue.use(iView);
// import echarts from 'echarts'
import accountHelp from './utils/accountHelp.js';

import './utils/convertToBase64.js';
// import VueCropper from 'vue-cropper';

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
    // 导航钩子，全局钩子
    if (to.path == '/login') {
        accountHelp.removeUserInfo();
    }
    let user = accountHelp.getUserInfo();
    if (!user) {
        if (to.name != 'Login' && to.name != 'Register' && to.name != 'ForgetPassword') {
            !!user ? next() : next('/login');
        } else {
            next();
        }
    } else {
        next();
    }
})

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
});

