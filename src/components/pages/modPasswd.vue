<template>
  <div class="ui-container ui-whitespace" id="mod-password">
    <div class="ui-form ui-border-t">
      <form action="#">
        <div class="ui-form-item ui-form-item-pure ui-border-b">
          <input v-model="phoneNumber" type="tel" name="手机号" placeholder="手机号">
          <a @click="phoneNumber=''" v-show="phoneNumber!=''" class="ui-icon-close"></a>
        </div>
        <!--mobile verification-->
        <mobile-check v-on:phoneVerify="verifyCodeInput" :prop-data="phoneNumber"></mobile-check>
        <div class="ui-form-item ui-form-item-pure ui-border-b">
          <input v-model="newPassword" type="password" name="新密码" placeholder="输入新密码">
          <a @click="newPassword=''" v-show="newPassword!=''" class="ui-icon-close"></a>
        </div>
        <div class="ui-form-item ui-form-item-pure ui-border-b">
          <input v-model="confirm" type="password" name="确认密码" placeholder="再次输入密码">
          <a @click="confirm=''" v-show="confirm!=''" class="ui-icon-close"></a>
        </div>
      </form>
    </div>
    <div class="ui-btn-wrap btn-login">
      <button @click="postModPassword()" class="ui-btn-lg ui-btn-primary">修改密码</button>
    </div>
    <div class="ui-whitespace">
      <a href="#" style="float: right">返回商城首页</a>
    </div>
  </div>
</template>

<script>
  import mobileCheck from './common/verification.vue'
  export default{
      data(){
          return{
            phoneNumber:"",
            phoneCode:"",
            newPassword:"",
            confirm:""
          }
      },
      components:{
          mobileCheck
      },
    methods:{
      postModPassword(){
        var self = this;
        var sendData = {phoneNumber:self.phoneNumber,
                        phoneCode:self.phoneCode,
                        newPassword:self.newPassword};
        if(self.formCheck()){
            if(self.confirmed){
              $.post("host/passport/updatePassword",sendData,function (rcvData) {
                if (null != rcvData.message)
                {
                  let msg = rcvData.message;
                  $.tips({content:msg,stayTime:2000,type:"info"});
                }
              },"json");
            }
            else{
              $.tips({content:"两次填写的密码不一致",stayTime:2000,type:"info"});
            }
        }
      },
      verifyCodeInput(val){
        this.phoneCode = val;
      }
    },
    computed:{
      confirmed:function () {
        return this.newPassword===this.confirm;
      }
    }
  }
</script>

<style>
  #mod-password .ui-form{
    margin-top: 1rem;
    background-color: #eeeeee;
  }
  #mod-password .ui-form-item{
    margin-top: 20px;
    background-color: #ffffff;
    border-radius: 5px;
  }
  #mod-password .ui-icon-success-block{
    color: green;
    position: absolute;
    top: 0;
    right: 6px;
  }
</style>
