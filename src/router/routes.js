import login from '../components/pages/login.vue'
import fastLogin from '../components/pages/fastLogin.vue'
import setPasswd from '../components/pages/setPasswd.vue'
import modPasswd from '../components/pages/modPasswd.vue'
import personalCenter from '../components/personal/persionalCetner.vue'
import register from '../components/pages/register.vue'
import forgetPassword from '../components/pages/common/forgetpassword.vue'
import resetPassword from '../components/pages/common/resetPassword.vue'
import test from '../components/pages/test.vue'

let routes =[
  {
    path:'/',
    redirect: '/login'
  },
  {
    path:'/login',
    component: login
  },
  {
    path:'/fastLogin',
    component: fastLogin
  },
  {
    name: setPasswd,
    path:'/setPasswd',
    component: setPasswd
  },
  {
    path:'/modPasswd',
    component: modPasswd
  },
  {
    path:'/personalCenter',
    component: personalCenter
  },
  {
    path:'/register',
    component: register
  },
  {
    path:'/forgetPassword',
    component:forgetPassword
  },
  {
    path:'/resetPassword',
    component: resetPassword
  },
  {
    path:'/test',
    component: test
  }
];

export default routes;
