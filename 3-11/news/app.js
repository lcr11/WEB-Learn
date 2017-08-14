/*
***HotApp云笔记，基于HotApp小程序统计云后台
***免费云后台申请地址 https://weixin.hotapp.cn/cloud
***API 文档地址：https://weixin.hotapp.cn/api
***小程序技术讨论QQ群：173063969
*/
//app.js
import hotapp from 'utils/hotapp.js';

App({

    /**
     * 启动事件
     */
    onLaunch: function () {
        hotapp.init('hotapp33481812');
    },

    globalData: {
        hotapp: hotapp 
    },
    aaa:{
        aaaA:hotapp
    }
})