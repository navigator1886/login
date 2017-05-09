<template>
  <div class="ui-container ui-whitespace" id="setPassword">
    <div class="ui-tips ui-tips-info">
      <i></i><span>请设置密码，以便下次登录</span>
    </div>
    <div class="ui-form ui-border-t">
      <div class="ui-form-item ui-form-item-pure ui-border-radius">
        <input v-model="password" type="password" name="密码" placeholder="密码">
        <a @click="password=''" v-show="password!=''" class="ui-icon-close"></a>
      </div>
      <div class="ui-form-item ui-form-item-pure ui-border-radius">
        <input v-model="confirm" type="password" name="确认密码" placeholder="确认密码">
        <a @click="confirm=''" v-show="confirm!=''" class="ui-icon-close"></a>
      </div>
    </div>
    <div class="ui-btn-wrap btn-login">
      <button @click="postSetpassword()" type="button" class="ui-btn-lg ui-btn-primary">设置密码</button>
    </div>
    <div class="ui-whitespace">
      <a href="#" class="ui-flex ui-flex-pack-end">直接进入商城</a>
    </div>
  </div>
</template>
<script>
  export default{
      data(){
          return{
            password:"",
            confirm:""
          }
      },
    computed:{
      confirmed:function(){
        return this.password === this.confirm;
      }
    },
    methods:{
      postSetpassword(){
        let self = this;
        if(self.formCheck()){
            if(self.confirmed){
              $.post("host/passport/setPassWord",{password:this.password},function (rcvData) {
                let msg = rcvData.message;
                $.tips({content:msg, stayTime:2000, type:"info"})
              },"json")
            } else{
              $.tips({content:"两次填写的密码不一致", stayTime:2000, type:"info"})
            }
        }
      }
    }
  }
</script>
<style>
  .ui-tips{
    margin-top: 60px;
    margin-bottom: 60px;
  }
  #setPassword .ui-form{
       background-color: #eeeeee;
     }
  #setPassword .ui-form .ui-form-item{
    background-color: #ffffff;
    margin-top: 20px;
  }
  #setPassword .ui-icon-success-block{
    color: green;
    position: absolute;
    top: 0;
    right: 6px;
  }
</style>
