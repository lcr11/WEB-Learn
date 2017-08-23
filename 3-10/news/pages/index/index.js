//index.js
//获取应用实例
var app = getApp(),
    hotapp = app.aaa.aaaA,
    pageIndex = 1,
    lock = false
;

Page({
  data: {
    images: [],
    list:[]
  },
  /**
     * 首次渲染事件
     */
    onShow: function() {
      var that = this;
      // hotapp.wxlogin(function(){
        wx.request({
          url: 'https://wxapi.hotapp.cn/api/searchkey',
          data: {appkey:'hotapp33481812',prefix:'image',
            pageIndex:1,
            pageSize:2
          },
          method: 'post', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: {'content-Type': 'application/json'}, // 设置请求的 header
          success: function(res){
            // success
            // console.log(res.data.data.items);
            that.setData({"images":res.data.data.items});
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        });
        hotapp.searchkey({
            "prefix": "item",
            "pageIndex": pageIndex,
            "pageSize": 3
        },
        function(res){
            // console.log(res.data.items);
            that.setData({list:res.data.items});
            pageIndex++
        })
    },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  onReachBottom:function(){
    console.log(1);
    var that = this,
        oldData = this.data.list
    ;
    // if(lock) return;
    console.log(oldData);
     hotapp.searchkey({
            "prefix": "item",
            "pageIndex": pageIndex,
            "pageSize": 3
        },
        function(res){
            console.log(res.data.items.length);
            if(res.data.items.length==0){
              lock = true;
              return
            } 
            that.setData({list:oldData.concat(res.data.items)});
            pageIndex++;
        })
  }
})
