//index.js
//获取应用实例
var app = getApp(),
    hotapp = app.aaa.aaaA,
    pageIndex = 1,
    lock = false,
    touchstartX ,
    touchendX
;

Page({
  data: {
    images: [],
    list:[]
  },
  
  //监听显示
    onShow: function() {
      // console.log(this)
      var that = this;
      pageIndex = 1;
      lock = false;
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
            // console.log(this)
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
            
        })
    },
    onTouchend:function(e){
      console.log(e.changedTouches[0].pageX);
      touchendX = e.changedTouches[0].pageX;
      if(touchstartX>touchendX){
        console.log('left');
      }
    },
    onTouchstart:function(e){
      touchstartX = e.changedTouches[0].pageX;
      console.log(e.changedTouches[0].pageX);
    },
  onFavorite:function(e){
    console.log(e)
    var that = this;
    console.log(e.currentTarget.dataset.key)
    var key =e.currentTarget.dataset.key,
        value = e.currentTarget.dataset.value,
        list = that.data.list
    ;
    if(value.isfav ==1){
      value.isfav =0;
    }else{
      value.isfav = 1;
    }
    var newdata = list.map(function(item){
      if(item.key == key){
        item.value.isfav = value.isfav;
      }
      return item;
    });
    hotapp.post(key,value,function(res){
        console.log(res);
        that.setData({list:newdata});
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
