<template>
  <div id="register" class="ui-container ui-whitespace">
    <!--slogan-->
    <div class="slogan">
      <span>buff商城，一直向专业努力的游戏商城！</span>
    </div>
    <!--fastLogin form-->
    <div class="ui-form ui-border-t">
      <form action="#">
        <div class="ui-form-item ui-form-item-pure ui-border-b ui-border-radius">
          <input v-model="phoneNumber" type="text" name="手机号" placeholder="手机号">
          <a @click="phoneNumber=''" v-show="phoneNumber!=''" class="ui-icon-close"></a>
        </div>
      </form>
    </div>
    <!--手机验证码组件-->
    <mobile-check v-on:phoneVerify="verifyCodeInput" @click="stayInView()" :prop-data="phoneNumber"></mobile-check>
    <!--submit button-->
    <div class="ui-btn-wrap btn-login">
      <button type="button" @click="postRegisterForm()" class="ui-btn-lg ui-btn-primary">注册新账号</button>
    </div>
  </div>
</template>

<script>
  import mobileCheck from './common/verification.vue'
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
      postRegisterForm(){
          var self = this;
          if(self.formCheck()){
            let sendData = {phoneNumber:self.phoneNumber,phoneCode:self.phoneCode};
            $.post("host/passport/register",sendData,function (rcvData) {
              let msg = rcvData.message;
              $.tips({
                content:msg,
                stayTime:2000,
                type:"info"
              });
            },"json")
          }

      },
      isUserExist(val){  //验证用户是否存在
        $.post("host/passport/login/verifyUser",{userName:val},function (rcvData) {
            if(rcvData.code == 1)
                $.tips({
                  content:"用户已存在",
                  stayTime:2000,
                  type:"info"
                })
        },"json");

      },
      verifyCodeInput(val){
        this.phoneCode = val;
      }
    }
  }
</script>
<style>
 .slogan{
    color: orangered;
   text-align: center;
    margin: 60px auto 70px;
   font-size: 16px;
   font-weight: bold;
  }
  .slogan span{
    line-height: 40px;
  }
</style>
