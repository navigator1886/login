<template>
  <div class="ui-container ui-whitespace">
    <div class="ui-btn-wrap">
      <router-link to="fastLogin" style="float:right;">手机快捷登录</router-link>
    </div>
    <!--tips-->
    <div id="tips"></div>
    <!--avatar-->
    <div class="ui-avatar-lg">
      <span style="background-image:url(http://placeholder.qiniudn.com/140x140)"></span>
    </div>
    <!--login form-->
    <div class="ui-form ui-border-t">
      <form action="#">
        <div class="ui-form-item ui-form-item-pure ui-border-radius">
          <input v-model.trim="userName" type="text" name="用户名" placeholder="用户名/手机号">
          <a @click="userName=''" v-show="userName!=''" class="ui-icon-close"></a>
        </div>
        <div class="ui-form-item ui-form-item-pure ui-border-radius">
          <input v-model.trim="password" type="password" name="密码" placeholder="密码">
          <a @click="password=''" v-show="password!=''" class="ui-icon-close"></a>
        </div>
      </form>
    </div>
    <!--verification-->
    <div id="verification" class="ui-form-item ui-form-item-r ui-border-b">
      <input v-model.trim="imgCode" type="text" name="验证码" placeholder="请输入验证码">
      <!-- 若按钮不可点击则添加 disabled 类 -->
      <button type="button" class="ui-border"><i class="ui-icon-refresh"></i></button>
      <!--<a href="#" class="ui-icon-success-block"></a>-->
      <a @click="imgCode=''" v-show="imgCode!=''" class="ui-icon-close"></a>
    </div>
    <!--submit button-->
    <div class="ui-btn-wrap btn-login">
      <button @click="postLoginForm()" type="button" class="ui-btn-lg ui-btn-primary">登录</button>
    </div>
    <div class="ui-whitespace">
      <router-link to="forgetPassword">忘记密码？</router-link>
      <router-link to="register" style="float: right">注册新账号</router-link>
    </div>
  </div>
</template>
<script>
  import md5 from '../../../src/assets/js/md5'
  import '../../../src/assets/js/encrypt'
  export default{
    data(){
      return {
        userName: "",
        password: "",
        imgCode: ""
      }
    },
    methods: {
      postLoginForm(){
        var self = this;
        if(self.formCheck()){
          let pwd = _52buff.getCode("abcd_1_2_3_4", self.password);
          let sendData = {userName: self.userName, password: pwd};
          $.post("/host/passport/login/login", sendData, function (rcvData) {
            let msg = rcvData.message;
            $.tips({content: msg, stayTime: 2000, type: "warn"});
          }, "json");
        }

      },
    }
  }
</script>

<style>
  .btn-login {
    margin-top: 10px;
    padding-left: 0;
    padding-right: 0;
  }

  .ui-avatar-lg {
    margin: 20px auto 60px;
  }

  #verification {
    margin-top: 20px;
    background-color: #ffffff;
  }

  #verification button {
    width: 140px;
    background: #eeeeee url("https://yun.reg.163.com/czc/cregcp?&t=1492655461254") no-repeat;
  }

  #verification .ui-icon-close {
    right: 140px;
    margin-right: 6px;
  }
</style>
