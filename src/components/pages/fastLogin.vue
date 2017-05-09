<template>
  <div id="fastLogin" class="ui-container ui-whitespace">
    <div class="ui-btn-wrap">
      <router-link to="/" class="ui-flex ui-flex-pack-end">密码登录</router-link>
    </div>
    <!--avatar-->
    <div class="ui-avatar-lg">
      <span style="background-image:url(http://placeholder.qiniudn.com/140x140)"></span>
    </div>
    <!--fastLogin form-->
    <div class="ui-form ui-border-t">
      <form action="#">
        <div class="ui-form-item ui-form-item-pure ui-border-b ui-border-radius">
          <input v-model.trim="phoneNumber" type="tel" name="手机号" placeholder="手机号">
          <a @click="phoneNumber=''" v-show="phoneNumber!=''" class="ui-icon-close"></a>
        </div>
      </form>
    </div>
    <!--手机验证码组件-->
    <mobile-check v-on:phoneVerify="verifyCodeInput" :prop-data="phoneNumber"></mobile-check>
    <!--submit button-->
    <div class="ui-btn-wrap btn-login">
      <button @click="postFastloginForm()" type="button" class="ui-btn-lg ui-btn-primary">登录</button>
    </div>
    <div class="ui-whitespace">
      <router-link to="forgetPassword">忘记密码？</router-link>
      <router-link to="register" style="float: right">注册新账号</router-link>
    </div>
  </div>
</template>

<script>
  import mobileCheck from './common/verification.vue'
  export default{
    data(){
      return {
        phoneNumber: "",
        phoneCode: ""
      }
    },
    components: {
      mobileCheck
    },
    methods: {
      postFastloginForm(){
        var self = this;
        if(self.formCheck()){
          var sendData = {phoneNumber: this.phoneNumber, phoneCode: this.phoneCode};
          $.post("host/passport/loginByPhone", sendData, function (rcvData) {
            let message = rcvData.message;
            $.tips({
              content: message,
              stayTime: 2000,
              type: "info"
            })
          }, "json");
        }

      },
      verifyCodeInput(val){
        this.phoneCode = val;
      },
    }
  }
</script>
