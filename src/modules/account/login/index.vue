
<template>
  <div class="login-container">
  <span>主界面</span>
   
  </div>
    
</template>
<script>
import account from '../../../api/account.js';
import accountHelp from '../../../utils/accountHelp.js';
var Logintimer;
export default {
  data() {
    return {
      logining: false,
      checked: null,
      form: {
        userName: '',
        userPwd: '',
        enterpriseUserName:'',
        enterpriseUserPwd:'',
      },
      activeName:'first',
      enterpriseCustomers:false,
      banners: [
        {
          src: require('./assest/3.jpg')
        },{
          src: require('./assest/4.jpg')
        },{
          src: require('./assest/5.jpg')
        },{
          src: require('./assest/6.jpg')
        },{
          src: require('./assest/7.jpg')
        }
      ]
    }
  },
  mounted(){
    // this.banner();
    // var info=accountHelp.getUserInfo();
    // if(info!=null&&info.userPwd!=''){
    //   if(info.type==1){
    //     this.form.userName = info.username;
    //     this.form.userPwd = info.userPwd
    //   }else{
    //     this.form.enterpriseUserName = info.username;
    //     this.form.enterpriseUserPwd = info.userPwd
    //   }
      
    // }
  },
  methods: {
    login() {
      // this.logining = true;
      // if(this.enterpriseCustomers){
      //   account.login({
      //       userName:this.form.enterpriseUserName,
      //       userPwd:this.form.enterpriseUserPwd,
      //       type:2
      //   }).then((res) => {
      //     this.logining = false;
      //     if (res.success) {
      //       if(this.checked){
      //         accountHelp.setUserInfo({
      //           "token": res.msg,
      //           "username": this.form.enterpriseUserName,
      //           "userPwd":this.form.enterpriseUserPwd,
      //           "avatar": "https://raw.g…wn-images/master/vueadmin/user.png",
      //           "name": "张某某",
      //            "type":2
      //         });
      //       }else{
      //         accountHelp.setUserInfo({
      //           "token": res.msg,
      //           "username": this.form.enterpriseUserName,
      //           "userPwd":'',
      //           "avatar": "https://raw.g…wn-images/master/vueadmin/user.png",
      //           "name": "张某某",
      //            "type":2
      //         });
      //       }
            
      //       clearInterval(Logintimer);
      //       Logintimer='';
      //       this.$router.push({ path: '/projectStatistics' });
      //       // this.$router.push({ path: '/UserStatistics' });
      //     }
      //   });
      // }else{
      //   account.login({
      //       userName:this.form.userName,
      //       userPwd:this.form.userPwd,
      //       type:1
      //   }).then((res) => {
      //     this.logining = false;
      //     if (res.success) {
      //       if(this.checked){
      //         accountHelp.setUserInfo({
      //           "token": res.msg,
      //           "username": this.form.userName,
      //           "userPwd":this.form.userPwd,
      //           "avatar": "https://raw.g…wn-images/master/vueadmin/user.png",
      //           "name": "张某某",
      //            "type":1
      //         });
      //       }else{
      //         accountHelp.setUserInfo({
      //           "token": res.msg,
      //           "username": this.form.userName,
      //           "userPwd":'',
      //           "avatar": "https://raw.g…wn-images/master/vueadmin/user.png",
      //           "name": "张某某",
      //            "type":1
      //         });
      //       }
      //       clearInterval(Logintimer);
      //       Logintimer='';
      //       this.$router.push({ path: '/projectStatistics' });
      //       // this.$router.push({ path: '/UserStatistics' });
      //     }
      //   });
      // }
      
    },
    Register() {
      this.$router.push({ path: '/Register' });
      clearInterval(Logintimer);
      Logintimer='';
    },
    ForgetPassworld() {
      this.$router.push({ path: '/ForgetPassword' });
      clearInterval(Logintimer);
      Logintimer='';
    },
    banner(){
      var banner=document.getElementById('login-banner');
      var oli = document.getElementsByTagName('li');
      var index=0;
      if(Logintimer){
        clearInterval(Logintimer);
      }else{
        Logintimer=setInterval(function(){
            index+=1;
            if(index>=oli.length){
                index=0
            }
            for(var i=0;i<oli.length;i++){
                if(oli[i].className=='Banner__show'){//清除li的透明度样式
                    oli[i].className='';
                }
            }
            oli[index].className='Banner__show';
        },3000);
       }
    },
    handleClick(tab, event) {

        if(tab.index==1){
          this.enterpriseCustomers=true;
        }else{
          this.enterpriseCustomers=false;
        }
      },
   
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
.login-container {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  .mask{
    position: absolute;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.5);
    z-index:100;
    top:0;
    left:0;
  }
  .el-tabs__header{
    .el-tabs__nav-wrap{
      .el-tabs__nav-scroll{
        .el-tabs__nav{
          width:100%;
          .el-tabs__active-bar{
            width:50% !important;
          }
          .el-tabs__item{
            width:50%;
            text-align:center;
            color:#fff;
            font-size:20px;
            &:hover{
              color:#fff;
            }
          }
        }
      }
    }
  }
}
.banner-wrapper{
  width:100%;
  height:100%;
  ul{
    position:relative;
    width:100%;
    height:100%;
    margin:0;
    padding:0;
    li{
      position: absolute;
      left: 0;
      top:0;
      width:100%;
      height:100%;
      margin:0;
      padding:0;
      opacity:0;
      z-index:1;
      transition: opacity 1s ease-in;
      &.Banner__show{
        opacity:1;
        z-index:2;
      }
      img{
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        display:block;
        float:left;
        -webkit-filter: blur(5px);
        -moz-filter: blur(5px);
        -o-filter: blur(5px);
        -ms-filter: blur(5px);
        filter: blur(5px);
      }
    }
  }
}
.login-wrapper {
  height: 525px;
  width: 950px;
  position: absolute;
  left: 50%;
  top: 44% !important;
  transform-style: preserve-3d;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  z-index:1000;
  .login-header {
    position: absolute
  }
  .login-banner {
    display: inline-block;
    width: 560px;
    height: 400px;
    margin-top: 125.5px;
    opacity:0.8;
    img{
      width:100%;
      height:100%;
    }
    
  }
  .login-content {
    width: 280px;
    height: 275px;
    background: #E9F4FF;
    background:rgba(0,0,0,.8);
    color:#fff;
    opacity:0.8;
    padding: 45px 55px 80px;
    float: right;
    margin: 126px 0 0 0;
  }
}


.lg-input {
  width: 262px;
  height: 38px;
  border: 1px solid #D3DEEE;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  margin-bottom: 16px;
  line-height: 38px;
  padding-left: 16px;
  background:#fff;
  label {
    float: left;
    i {
      padding: 0 10px;
      color: #C5D0E0;
    }
  }
  input {
    height: 38px;
    line-height: 38px;
    width: 200px;
    background: none;
    border: 0;
    float: left;
    outline: none;

  }
   :-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #E9F4FF inset;
    border: 0px solid #CCC!important;
    height: 35px;
    line-height: 35px;
    background: #E9F4FF;
  }
}

.lg-checkbox {
  width: 262px;
  height: 38px;
  margin-bottom: 16px;
  line-height: 38px;
  padding-left: 16px;
  i {
    float: right;
    font-style: normal;
  }
  span {
    color: #4E8CFF;
  }
}

.lg-btn {
  width: 282px;
  height:32px;
  text-align: center;
  border: 1px solid #4E8CFF;
  background: #4E8CFF;
  box-shadow: 0 4px 6px #9ABEFD;
  color: #fff;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  outline:none;
  cursor:pointer;
}
</style>
<style>
.el-carousel__container {
  height: 400px;
}
</style>

 

