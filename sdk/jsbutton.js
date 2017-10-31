/**
 * Created by luoxiaoxiang on 2017/10/31.
 */

const url = 'https://api.pay-hub.cn/jsbutton';

!function () {
    "use strict";
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = '<style type="text/css">body,ul,li{padding:0;margin:0}li{list-style:none}#payhub-pay{width:100%;height:100%;background:url(https://dn-jspay.qbox.me//v2.ui2.pay-list-bg.png?8) repeat;position:fixed;left:0;top:0;text-align:center;z-index:9998;display:none}#payhub-pay.open{display:block}#payhub-pay-list{width:280px;margin:0 auto;padding:12px 15px;position:fixed;background-color:#fff;text-align:center;box-shadow:0 0 8px #999;z-index:9999}.payhub-pay-btn{width:100%;height:60px;border:0;border-top:1px solid #e6e6e6;cursor:pointer;font-size:20px;font-family:"Microsoft YaHei";display:inline-block;line-height:60px;text-align:center}.payhub-pay-btn span{display:inline-block;text-align:center;width:150px;vertical-align:middle}.payhub-pay-btn:first-child{border-top:0}#payhub-pay-close{width:30px;height:30px;background:url(https://dn-jspay.qbox.me//v2.ui2.close2.png?8) center no-repeat;position:absolute;right:0;top:0;cursor:pointer}.payhub-pay-btn.channel-un i{display:inline-block;width:50px;height:40px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.un.png?8) center no-repeat;background-size:contain}@media (max-width:450px){.payhub-pay-btn.channel-un i{display:inline-block;width:35px;height:28px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.un.png?8) center no-repeat;background-size:contain}}.payhub-pay-btn.channel-unwap i{display:inline-block;width:50px;height:40px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.un.png?8) center no-repeat;background-size:contain}@media (max-width:450px){.payhub-pay-btn.channel-unwap i{display:inline-block;width:35px;height:28px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.un.png?8) center no-repeat;background-size:contain}}.payhub-pay-btn.channel-ali i{display:inline-block;width:50px;height:40px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.ali.png?8) center no-repeat;background-size:contain}@media (max-width:450px){.payhub-pay-btn.channel-ali i{display:inline-block;width:35px;height:28px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.ali.png?8) center no-repeat;background-size:contain}}.payhub-pay-btn.channel-wxmp i{display:inline-block;width:50px;height:40px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.wx.png?8) center no-repeat;background-size:contain}@media (max-width:450px){.payhub-pay-btn.channel-wxmp i{display:inline-block;width:35px;height:28px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.wx.png?8) center no-repeat;background-size:contain}}.payhub-pay-btn.channel-bcwxmp i{display:inline-block;width:50px;height:40px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.wx.png?8) center no-repeat;background-size:contain}@media (max-width:450px){.payhub-pay-btn.channel-bcwxmp i{display:inline-block;width:35px;height:28px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.wx.png?8) center no-repeat;background-size:contain}}.payhub-pay-btn.channel-wx i{display:inline-block;width:50px;height:40px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.wx.png?8) center no-repeat;background-size:contain}@media (max-width:450px){.payhub-pay-btn.channel-wx i{display:inline-block;width:35px;height:28px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.wx.png?8) center no-repeat;background-size:contain}}.payhub-pay-btn.channel-bcwx i{display:inline-block;width:50px;height:40px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.wx.png?8) center no-repeat;background-size:contain}@media (max-width:450px){.payhub-pay-btn.channel-bcwx i{display:inline-block;width:35px;height:28px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.wx.png?8) center no-repeat;background-size:contain}}.payhub-pay-btn.channel-wxwap i{display:inline-block;width:50px;height:40px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.wx.png?8) center no-repeat;background-size:contain}@media (max-width:450px){.payhub-pay-btn.channel-wxwap i{display:inline-block;width:35px;height:28px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.wx.png?8) center no-repeat;background-size:contain}}.payhub-pay-btn.channel-bcwxwap i{display:inline-block;width:50px;height:40px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.wx.png?8) center no-repeat;background-size:contain}@media (max-width:450px){.payhub-pay-btn.channel-bcwxwap i{display:inline-block;width:35px;height:28px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.wx.png?8) center no-repeat;background-size:contain}}.payhub-pay-btn.channel-jd i{display:inline-block;width:50px;height:40px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.jd.png?8) center no-repeat;background-size:contain}@media (max-width:450px){.payhub-pay-btn.channel-jd i{display:inline-block;width:35px;height:28px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.jd.png?8) center no-repeat;background-size:contain}}.payhub-pay-btn.channel-bd i{display:inline-block;width:50px;height:40px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.bd.png?8) center no-repeat;background-size:contain}@media (max-width:450px){.payhub-pay-btn.channel-bd i{display:inline-block;width:35px;height:28px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.bd.png?8) center no-repeat;background-size:contain}}.payhub-pay-btn.channel-yee i{display:inline-block;width:50px;height:40px;vertical-align:middle;background:url(https://api.pay-hub.cn/img/un_pay.png) center no-repeat;background-size:contain}@media (max-width:450px){.payhub-pay-btn.channel-yee i{display:inline-block;width:35px;height:28px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.yb.png?8) center no-repeat;background-size:contain}}.payhub-pay-btn.channel-kuaiqian i{display:inline-block;width:50px;height:40px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.kq.png?8) center no-repeat;background-size:contain}@media (max-width:450px){.payhub-pay-btn.channel-kuaiqian i{display:inline-block;width:35px;height:28px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.kq.png?8) center no-repeat;background-size:contain}}.payhub-pay-btn.channel-bckj i{display:inline-block;width:50px;height:40px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.un.png?8) center no-repeat;background-size:contain}@media (max-width:450px){.payhub-pay-btn.channel-bckj i{display:inline-block;width:35px;height:28px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.un.png?8) center no-repeat;background-size:contain}}.payhub-pay-btn.channel-bcaliqr i{display:inline-block;width:50px;height:40px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.ali.png?8) center no-repeat;background-size:contain}@media (max-width:450px){.payhub-pay-btn.channel-bcaliqr i{display:inline-block;width:35px;height:28px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.ali.png?8) center no-repeat;background-size:contain}}.payhub-pay-btn.channel-bcali i{display:inline-block;width:50px;height:40px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.ali.png?8) center no-repeat;background-size:contain}@media (max-width:450px){.payhub-pay-btn.channel-bcali i{display:inline-block;width:35px;height:28px;vertical-align:middle;background:url(https://dn-jspay.qbox.me//v2.ui2.ali.png?8) center no-repeat;background-size:contain}}#payhub-pay .payhub-wx{padding:35px;width:250px;height:250px;margin:0 auto;background-color:#fff;position:relative}#payhub-pay-loading{width:100%;height:100%;position:absolute;left:0;top:0;text-align:center;border-radius:8px;background:url(https://dn-jspay.qbox.me//v2.ui2.loading.gif?8) center no-repeat;background-size:30px 30px}@media (max-width:450px){#payhub-pay-list{width:100%;box-shadow:none;padding:0;position:fixed;left:0;bottom:0;-webkit-animation:payListMove .5s ease-in-out 0s alternate}@-webkit-keyframes payListMove{0%{bottom:-500px}100%{bottom:0}}.payhub-pay-btn{height:45px;line-height:45px;font-size:16px}.payhub-pay-close{display:none}}</style>';
    document.head.appendChild(css);
}();

!function () {
    document.writeln("<div id=\'payhub-pay\'></div>");
    document.writeln("<ul id=\'payhub-pay-list\' style=\'display: none; bottom: 218px; left: 291px;\'>");
    document.writeln("    <li class=\'payhub-pay-btn channel-yee\' id=\'payhub-js\'><i></i><span>快捷支付</span></li>");
    document.writeln("    <li class=\'payhub-pay-btn channel-ali\'><i></i><span>支付宝支付</span></li>");
    document.writeln("    <div id=\'payhub-pay-close\'></div>");
    document.writeln("</ul>");
}();
!function () {
    document.getElementById("test").onclick = function () {
        document.getElementById("payhub-pay").className = 'open';
        document.getElementById("payhub-pay-list").style.display = 'block';
    };
}();

!function () {
    document.getElementById("payhub-pay-close").onclick = function () {
        document.getElementById("payhub-pay").className = '';
        document.getElementById("payhub-pay-list").style.display = 'none';
    };
}();

function pay(data) {
    document.getElementById("payhub-js").onclick = function (data) {
        var f = document.createElement("form");
        var i1 = document.createElement("input");
        var i2 = document.createElement("input");
        var i3 = document.createElement("input");
        var i4 = document.createElement("input");
        var i5 = document.createElement("input");
        var i6 = document.createElement("input");
        var i7 = document.createElement("input");
        var i8 = document.createElement("input");

        f.method = "POST";
        f.action = url;

        i1.name = "merchant_id";
        i1.value = Config.merchant_id;
        f.appendChild(i1);

        i2.name = "app_id";
        i2.value = Config.app_id;
        f.appendChild(i2);

        i3.name = "user_id";
        i3.value = Config.user_id;
        f.appendChild(i3);

        i4.name = "pay_channel";
        i4.value = Config.pay_channel;
        f.appendChild(i4);

        i5.name = "amount";
        i5.value = Config.amount;
        f.appendChild(i5);

        i6.name = "return_url";
        i6.value = Config.return_url;
        f.appendChild(i6);

        i7.name = "webhook_url";
        i7.value = Config.webhook_url;
        f.appendChild(i7);

        i8.name = "sign";
        i8.value = Config.sign;
        f.appendChild(i8);

        f.submit();
    };
};



