## 引入js文件
```
<script id='spay-script' type='text/javascript' src='https://api.pay-hub.cn/js/jsbutton.js'></script>
```
## 配置 & 支付
```
    const Config = {
        merchant_id: 2,//商户ID
        app_id: 'Pt0OWdb36WMuGhYq',//应用ID
        user_id: 6,//用户ID
        pay_channel: 'UN_PC',//渠道类型 ALI_PC,ALI_H5,ALI_APP,WX_PC,WX_H5,WX_APP,UN_PC,UN_H5,UN_APP
        amount: 100,//订单金额 必须是正整数，单位为分
        return_url: 'https://api.pay-hub.cn',//支付渠道处理完请求后,当前页面自动跳转到商户网站里指定页面的http路径，中间请勿有#,?等字符
        webhook_url: 'test.com',//订单结果异步通知url
        sign: '25b5ef50d439434c611fa1b7ce55c446'//签名 md5(app_id+ap_secret)
    };
    pay(Config);
```