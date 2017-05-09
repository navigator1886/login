<template>
  <div class="ui-container ui-whitespace">
    <div class="ui-form ui-border-t">
      <div class="ui-form-item ui-form-item-pure ui-border-b">
        <validity field="mobile">
          <input  type="text" placeholder="手机">
        </validity>
      </div>
      <div class="ui-form-item ui-form-item-pure ui-border-b">
        <validity field="password">
          <input type="text" placeholder="密码">
        </validity>
      </div>
    </div>
    <div class="ui-btn-wrap btn-login">
      <button class="ui-btn-lg ui-btn-primary">验证</button>
    </div>
  </div>
</template>

<script>
  export default{
      data(){
          return{
            mobile:{},
            password:{}
          }
      },
    computed:{
          valid:function () {
            let results = this.results;
            let fields = Object.keys(results);
            let ret = true;
            for(let i=0;i<fields.length;i++)
                var field = fields[i];
            if (results[field].invalid) {
              ret = false;
            }
            return ret;
          }
    },
    validators:{
      mobile:{
        message:"请输入正确的手机号码",
        check: (val)=>{
          return /(?=^1[345789]\d{9})\d{11}$/.test(val);
        },
      },
      password:{
        message:"密码长度为至少6位",
        check: (val)=>{
          return /\w{4,}/.test(val);
        }
      }
    }
  }
</script>

