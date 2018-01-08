import fetch from '../utils/fetch';
export default {
    login: function(data) {
        return fetch({
            url: '/useradmin/Login/TokenLogin',
            method: 'post',
            data: data
        });
    },
    RegisterPersonal:function (data) {
    	return fetch({
            url: '/UserAdmin/Register/RegisterPersonalData',
            method: 'post',
            data: data
        });
    },
    RegisterEnterprise:function (data) {
        return fetch({
            url: '/Useradmin/Register/RegisterEnterpriseData',
            method: 'post',
            data: data
        });
    },
    //验证码
    phoneCode:function(data){
    	return fetch({
            url: '/UserAdmin/Register/SendYZM',
            method: 'post',
            data: data
        });
    },
    //企业类型
    EnterpriseType:function(data){
    	return fetch({
            url: '/UserAdmin/Register/EnterpriseTypeList',
            method: 'post',
            data: data
        });
    	
    },
    //找回密码
  retrieveVerifyCode:function (data) {
    return fetch({
      url: `/useradmin/Register/RetrievePasswordDataSendMsg?tel=${data.tel}&type=${data.type}`,
      method: 'post',
    });
  },
  retrievePasswordData:function (data) {
    return fetch({
      url: `/useradmin/Register/RetrievePasswordData?tel=${data.tel}&UserPass=${data.UserPass}&VerificationCode=${data.VerificationCode}&type=${data.type}&userName=${data.userName}`,
      method: 'post',
    });
  },
    GetUserInfo:function(data){
    	return fetch({
            url: '/userAdmin/Register/GetEnterpriseInfo',
            method: 'post',
            data: data
        });
    }
};