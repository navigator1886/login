<template>
  <div class="ui-container">
    <!--user avatar and userID-->
    <div id="user-avatar">
      <div class="ui-avatar-one">
        <span style="background-image:url(http://placeholder.qiniudn.com/140x140)"></span>
      </div>
      <div class="ui-flex ui-flex-pack-center">
        <div>小白不白</div>
      </div>
    </div>
    <!--user order_list-->
    <div id="order-list" class="ui-border-b">
      <ul class="ui-list ui-list-one ui-list-link ui-border-b">
        <li class="ui-border-b">
          <div class="ui-list-thumb-s">
            <span style="background-image:url('../../../static/icon/order.svg')"></span>
          </div>
          <div class="ui-list-info">
            <h4 class="ui-nowrap">我的订单</h4>
            <div class="ui-txt-info">查看全部订单</div>
          </div>
        </li>
      </ul>
    </div>
    <!--order_list info-->
    <div id="user-panel">
      <ul class="ui-list ui-list-pure ui-tiled">
        <li><div class="ui-list-thumb-s"><span style="background-image:url('../../../static/icon/sidebar_icon_wallet.svg')"></span></div><i>待付款</i></li>
        <li>
          <div class="ui-list-thumb-s"><span style="background-image:url('../../../static/icon/clock.svg')"></span></div>
          <i>处理中</i>
        </li>
        <li>
          <div class="ui-list-thumb-s"><span style="background-image:url('../../../static/icon/success.svg')"></span></div>
          <i>完成订单</i>
        </li>
        <li>
          <div class="ui-list-thumb-s"><span style="background-image:url('../../../static/icon/fail.svg')"></span></div>
          <i>取消订单</i>
        </li>
      </ul>
    </div>
    <!--service-->
    <div id="service">
      <ul class="ui-list ui-list-one ui-list-link ui-border-tb" style="margin-top: 10px">
        <li class="ui-border-b">
          <div class="ui-list-thumb-s">
            <span style="background-image:url('../../../static/icon/crm_buyer.svg')"></span>
          </div>
          <div class="ui-list-info">
            <h4 class="ui-nowrap">我是买家</h4>
            <span class="ui-txt-info"></span>
          </div>
        </li>
        <li class="ui-border-b">
          <div class="ui-list-thumb-s">
            <span style="background-image:url('../../../static/icon/shop.svg')"></span>
          </div>
          <div class="ui-list-info">
            <h4 class="ui-nowrap">我是卖家</h4>
            <span class="ui-txt-info"></span>
          </div>
        </li>
        <li class="ui-border-b">
          <div class="ui-list-thumb-s">
            <span style="background-image:url('../../../static/icon/setting.svg')"></span>
          </div>
          <div class="ui-list-info">
            <h4 class="ui-nowrap">个人信息设置</h4>
            <div class="ui-txt-info"></div>
          </div>
        </li>
        <li class="ui-border-b">
          <div class="ui-list-thumb-s">
            <span style="background-image:url('../../../static/icon/question.svg')"></span>
          </div>
          <div class="ui-list-info">
            <h4 class="ui-nowrap">常见问题</h4>
            <span class="ui-txt-info"></span>
          </div>
        </li>
        <li class="ui-border-b">
          <div class="ui-list-thumb-s">
            <span style="background-image:url('../../../static/icon/osm-message-complain.svg')"></span>
          </div>
          <div class="ui-list-info">
            <h4 class="ui-nowrap">我要投诉</h4>
            <span class="ui-txt-info"></span>
          </div>
        </li>
      </ul>
    </div>
    <!--footer-->
    <div id="footer">
      <ul class="ui-list ui-list-pure ui-tiled ui-border-t">
        <li>
          <div class="ui-list-thumb-s"><span style="background-image:url('../../../static/icon/home.svg')"></span></div>
          <i>首页</i>
        </li>
        <li>
          <div class="ui-list-thumb-s"><span style="background-image:url('../../../static/icon/fast_purchase.svg')"></span></div>
          <i>快速购买</i>
        </li>
        <li>
          <div class="ui-list-thumb-s"><span style="background-image:url('../../../static/icon/fast_sold_out.svg')"></span></div>
          <i>快速出货</i>
        </li>
        <li>
          <div class="ui-list-thumb-s"><span style="background-image:url('../../../static/icon/my.svg')"></span></div>
          <i>我的</i>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
  #user-avatar{
    top: 0;
    position: relative;
    width: 100%;
    background-color: #1470DF;
    height: 130px;
    color: #ffffff;
  }
  #user-avatar .ui-flex{
    margin-top: 25px;
  }
  #user-avatar .ui-avatar-one{
    margin-right: auto;
    margin-left: auto;
    top: 20px;
    position: relative;
  }
  #order-list{
    margin-top: 10px;
  }

  #user-panel .ui-list-thumb-s{
    margin-left: auto;
    margin-right: auto;
  }
  #user-panel li{
    margin-left: 0;
  }
  .ui-list-thumb-s span{
    margin-top: 8px;
  }
  #service{
    width: 100%;
    padding-bottom: 102px;
  }
  #footer{
    bottom: 0;
    width: 100%;
    position: fixed;
  }
  #footer .ui-list-thumb-s{
    margin-left: auto;
    margin-right: auto;
  }
  #footer li{
    margin-left: 0;
    padding: 0;
  }
  #footer .ui-list-thumb-s{
    margin-top: 0;
    margin-bottom: 0px;
  }
</style>
