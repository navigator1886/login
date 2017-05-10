/**
 * Created by hlw on 2017/4/20.
 */
export default {
  install(Vue){
    Vue.prototype.formCheck=()=>{
      var $input = document.getElementsByTagName('input');
      for(var i=0;i<$input.length;i++){
        var el = $input[i];
        if(el.value===""){
          $.tips({content:"请填写"+ el.name,stayTime:2000,type:"info"});
          return false;
        }else if(el.type==="tel"){
          if(!/(?=^1[345789]\d{9})\d{11}$/.test(el.value)){
            $.tips({content:"请填写正确的手机号",stayTime:2000,type:"info"});
            return false;
          }
        }else if(el.type==="password"){
          if(!/.{6,}/.test(el.value)){
            $.tips({content:"密码应至少包含6个字符",stayTime:2000,type:"info"});
            return false;
          }
        }
      }
      return true;
    }
  }
}

