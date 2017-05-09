<template>
  <div class="ui-container ui-whitespace">
    <header class="ui-header ui-header-stable ui-border-b">
      <i class="ui-icon-return" onclick="history.back()"></i><h1>重置密码</h1>
    </header>
    <div class="ui-form ui-border-t">
      <div class="ui-form-item ui-form-item-pure ui-border-b">
            <input  type="password" v-model="newPassword" name="新密码" placeholder="新密码">
          <a @click="newPassword=''" v-show="newPassword!=''" class="ui-icon-close"></a>
        </div>
      <div class="ui-form-item ui-form-item-pure ui-border-b">
          <input v-model="confirm" type="password" name="确认密码" placeholder="确认密码">
          <a @click="confirm=''" v-show="confirm!=''" class="ui-icon-close"></a>
        </div>
    </div>
    <div class="ui-btn-wrap btn-login">
      <button @click="postResetPwdForm()" class="ui-btn-lg ui-btn-primary">重置密码</button>
    </div>
  </div>
</template>
<style>
  .ui-header-stable{
    background-color: #eeeeee;
    color: gray;
  }
  .ui-form{
    margin-top: 1rem;
    background-color: #eeeeee;
  }
  .ui-form-item{
    margin-top: 20px;
    background-color: #ffffff;
    border-radius: 5px;
  }
</style>

<script>
  export default{
      data(){
          return{
            newPassword:"",
            confirm:""
          }
      },
    computed:{
      confirmed:function () {
        return this.newPassword === this.confirm;
      }
    },
    methods:{
      postResetPwdForm(){
        let self = this;
        if(self.formCheck()){
            if(self.confirmed){
              $.post("host/passport/setPassWord",{password:this.newPassword},function (rcvData) {
                let msg = rcvData.message;
                $.tips({content:msg, stayTime:2000, type:"info"})
              },"json")
            }
            else{
              $.tips({content:"两次填写的密码不一致", stayTime:2000, type:"info"})
            }
        }
      }
    }
  }
</script>
