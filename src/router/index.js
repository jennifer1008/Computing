import Vue from 'vue';
import Router from 'vue-router';
//import { Message } from 'element-ui';
/* layout*/
import Layout1 from '../layout/layout-1/index.vue';

Vue.use(Router);
// 按需加载
const output = resolve => require(['../modules/output/index.vue'], resolve);
const Login = resolve => require(['../modules/account/login/index.vue'], resolve);
const NotFound = resolve => require(['../modules/otherModules/404/index.vue'], resolve);

export default new Router({
    // mode: 'history',
    routes: [{
            path: '/myProject',
            hidden: true, //是否显示   
            beforeEnter: (to, from, next) => {
                if (to.params.id) {
                    next();
                } else {
                    
                }
            }
        },
        // {
        //     path: '/',
        //     name: 'Login',
        //     component: Login,
        //     hidden: true, //是否显示  
        // },
        {
            path: '/',
            name: 'Index',
            component: Layout1,
            hidden: true, //是否显示  
            children: [{
                path: '/output',
                component: output,
                name: '输出',
            }]
        },
        {
            path: '*',
            hidden: true,
            redirect: { path: '/404' }
        },
        {
            path: '/404',
            component: NotFound,
            name: '',
            hidden: true
        }
    ]
});