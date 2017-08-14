//index.js
//获取应用实例
var app = getApp(),
    hotapp = app.aaa.aaaA,
    pageIndex = 1,
    lock = false
;

Page({
  data: {
    list:[]
  },
  //监听显示
    onShow: function() {
        var animation = wx.createAnimation({
          duration: 1000,
            timingFunction: 'ease',
        })

        this.animation = animation
        var that =this;
        hotapp.searchkey({
            "prefix": "item",
            "pageIndex": pageIndex,
            "pageSize": 100
        },
        function(res){
            // console.log(res.data.items);
            var data = res.data.items,
                newdata = []
            ;
            var arr = data.map(function(item){
              if(item.value.isfav == 1){
                newdata.push(item)
              }
            });
            that.setData({list:newdata});
            
        }
        );
    },
  onFavorite:function(e){
    var that = this,
        key = e.currentTarget.dataset.key,
        value = e.currentTarget.dataset.value,
        data = that.data.list
    
    var arrayTmp = [];
    value.isfav = 0;
    hotapp.post(key,value,function(res){
         console.log(e.currentTarget.dataset.key);
   
      var newdata = data.map(function(item){
        if(item.key == key){
          that.animation.opacity(0).step();
          item.value.animation = that.animation.export();
        }else{
          that.animation.opacity(1).step();
          item.value.animation = that.animation.export();
          arrayTmp.push(item);
        }
        return item;
      });
      that.setData({list:newdata});
      setTimeout(function(){
        that.setData({list:arrayTmp});
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },1200);
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
  }
})
