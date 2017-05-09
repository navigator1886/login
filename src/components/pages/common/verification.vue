<template>
  <div class="ui-form-item ui-form-item-r ui-border ui-border-radius verification" >
    <input v-model.trim="verifyCode" @blur="completeCodeInput" type="text" name="手机验证码" placeholder="手机验证码">
    <a @click="verifyCode=''" v-show="verifyCode!=''" class="ui-icon-close"></a>
    <!-- 验证码发送按钮-->
    <button v-if="waiting" type="button" class="btn-disabled" disabled>{{waitTime + "s 后重新发送"}}</button>
    <button v-else type="button" @click="requestVerifyCode()" :class="isMobile()? 'ui-btn-primary':'btn-disabled'" :disabled="!isMobile()">{{message}}</button>
  </div>
</template>

<script>
  export default{
      props:{
          propData:""
      },
      data(){
          return{
            verifyCode:"",
            message:"获取验证码",
            waitTime: 60,
            waiting: false
          }
      },
    methods:{
      setState(){
        var self = this;
        self.waiting = ~self.waiting;
      },        //翻转等待状态
      counter(){
          var self = this;
          var seconds = self.waitTime;
          self.setState();
          if(null == self.waitTime || self.waitTime < 0)
              error("some error happened!");
          else
              var Dec = setInterval(function() {
            if(self.waitTime == 0){
              self.setState();
              clearInterval(Dec);
              self.waitTime = seconds;
            }else
                self.waitTime--;
        },1000)
      },         //倒计时
      requestVerifyCode(){
          var self = this;
          self.message = "重新获取";
          self.counter();  //倒计时
          $.post("host/passport/getPhoneCode",{phoneNumber:this.propData},function (rcvData) {
              if(rcvData.code == 0){
              $.tips({
                content:"验证码发送成功，注意查收！",
                stayTime:2000,
                type:"success"
              });
              return true;
            }
            else{
              $.tips({
                content:"系统错误，稍后再试！",
                stayTime:2000,
                type:"info"
              });
              return false;
            }
          },"json")
      },
      completeCodeInput(){    //验证码输入完成后传递给父组件，作为父组件表单的一部分
          if(this.verifyCode.trim()){
              this.$emit('phoneVerify',this.verifyCode);
          }
      },
      isMobile(){
        var self = this;
        var reg = /^(?=^1[345789]\d{9})\d{11}$/;
        if(reg.test(self.propData))
            return true
        else{
            self.message = "获取验证码";
            return false;
        }
      }
    }
  }
</script>

<style>
  .verification{
    margin-top: 20px;
    background-color: #ffffff;
    border-radius: 5px;
  }
  .verification button{
    width: 35%;
    color: #ffffff;
  }
  .verification .ui-icon-close{
    right: 35%;
    margin-right: 6px;
  }
  .verification .btn-disabled{
    background-color: lightgray;
    color: #ffffff;
  }
</style>
