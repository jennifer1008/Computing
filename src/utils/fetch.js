import axios from 'axios';
//import { Message } from 'element-ui';
import accountHelp from '../utils/accountHelp.js';

// 创建axios实例
const service = axios.create({
    // baseURL: process.env.BASE_API, // api的base_url
    baseURL: "https://calc.cloudhvacr.com",
    timeout: 30000 // 请求超时时间
});

// request拦截器 
service.interceptors.request.use(config => {
    // Do something before request is sent 
    var token = '';
    if (accountHelp.getUserInfo() && accountHelp.getUserInfo().token) {
        token = accountHelp.getUserInfo().token;
    }
    // 清除缓存问题 可能IE有问题 TODO 
    config.headers['Expires'] = '-1';
    config.headers['Cache-Control'] = "no-cache,no-store,must-revalidate,max-age=-1,private";


    config.headers['token'] = token; // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改

    return config;
}, error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
})

// respone拦截器
// axios.interceptors.response.use(function (response) {  
//     // token 已过期，重定向到登录页面  
//     if (response.data.code == 4){  
//         localStorage.clear()  
//         router.replace({  
//             path: '/signin',  
//             query: {redirect: router.currentRoute.fullPath}  
//         })  
//     }  
//     return response  
// }, function (error) {  
//     // Do something with response error  
//     return Promise.reject(error)  
// })  
service.interceptors.response.use(
    response => {
        if (response.data.success != undefined) {
            const isSuccess = response.data.success;
            if (isSuccess) {} else {
                if(response.data.msg=='登录超时'){
                    // Message({
                    //     message: response.data.msg,
                    //     type: 'error',
                    //     duration: 3 * 1000
                    // });
                    var location=window.location.href;
                    var local = location.split('/');
                    // this.$router.push({ path: '/' });
                    window.location.href=local[0];
                }else{
                    // Message({
                    //     message: response.data.msg,
                    //     type: 'error',
                    //     duration: 3 * 1000
                    // });
                }
                

            }
        }
        return response.data;
    },
    error => {
        if(error.message=='Network Error'){
               // Message({
               //      message:'网络正忙，请稍后重试',
               //      type: 'error',
               //      duration: 3 * 1000
               //  });
            }else{
                // Message({
                //     message: error.message,
                //     type: 'error',
                //     duration: 3 * 1000
                // });
            }
       
        return Promise.reject(error);
    }
)

export default service;