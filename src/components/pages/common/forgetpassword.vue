<template>
  <div class="ui-container ui-whitespace">
    <header class="ui-header ui-header-stable ui-border-b">
      <i class="ui-icon-return" onclick="history.back()"></i><h1>验证手机</h1>
    </header>
    <div class="ui-form ui-border-t">
      <form action="#">
        <div class="ui-form-item ui-form-item-pure ui-border-b ui-border-radius">
          <input v-model="phoneNumber" type="tel" name="手机号" placeholder="手机号">
          <a @click="phoneNumber=''" v-show="phoneNumber!=''" class="ui-icon-close"></a>
        </div>
      </form>
    </div>
    <!--phone verify code-->
    <mobile-check v-on:phoneVerify="verifyCodeInput" :prop-data="phoneNumber"></mobile-check>
    <!--next button-->
    <div class="ui-btn-wrap btn-login">
      <input @click="postFgPwdForm()" type="button" class="ui-btn-lg ui-btn-primary" value="下一步">
    </div>
  </div>
</template>
<script>
  import mobileCheck from './verification.vue'
  export default{
      data(){
          return{
            phoneNumber:"",
            phoneCode:""
          }
      },
    components:{
      mobileCheck
    },
    methods:{
      postFgPwdForm(){
        var self = this;
        if(self.formCheck()){
          var sendData = {phoneNumber:self.phoneNumber,phoneCode:self.phoneCode};
          $.post("host/passport/loginByPhone",sendData, function (rcvData) {
            let message = rcvData.message;
            $.tips({
              content:message,
              stayTime:2000,
              type:"info"
            })
          },"json");
        }

      },
      verifyCodeInput(val){
        this.phoneCode = val;
      }
    }
  }
</script>

