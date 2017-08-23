//index.js
//获取应用实例
var app = getApp(),
    hotapp = app.aaa.aaaA,
    pageIndex = 1,
    lock = false
;

Page({
  data: {
    info:{}
  },
  //监听显示
    onShow: function() {
      var that = this;
      wx.login({
        success: function(res){
          
          wx.getUserInfo({
            success: function(res){
              // success
              that.setData({'info':res.userInfo});
            },
            fail: function() {
              // fail
            },
            complete: function() {
              // complete
            }
          })
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoadNews:function(e){
    // console.log(e.currentTarget.dataset.key)
    wx.navigateTo({
      url: '../description/index?key='+e.currentTarget.dataset.key,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onReachBottom:function(){
    if(pageIndex == 1){
      pageIndex++;
      return;
    }
    // console.log(1);
    var that = this,
        oldData = this.data.list
    ;
    if(lock) return;
    // console.log(oldData);
     hotapp.searchkey({
            "prefix": "item",
            "pageIndex": pageIndex,
            "pageSize": 3
        },
        function(res){
            // console.log(res.data.items.length);
            if(res.data.items.length==0){
              lock = true;
              return
            } 
            that.setData({list:oldData.concat(res.data.items)});
            pageIndex++;
        })
  }
})
