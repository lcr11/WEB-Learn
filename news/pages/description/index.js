//index.js
//获取应用实例
var app = getApp(),
    hotapp = app.aaa.aaaA
;

Page({
  data: {
    desc:{
      key:"",
      value:{}

    }
  },
  onLoad:function(options){
    var desc ={
      key:options.key
    }
    // console.log(options);

    this.setData({"desc":desc});
  },
  //监听显示
  onShow: function() {
    // 取单独一条数据
    var that = this;
    // console.log(that.data.desc.key)
    hotapp.searchkey({
          "prefix": that.data.desc.key,
          "pageIndex": 1,
          "pageSize": 1
      },
      function(res){
          // console.log(res.data.items[0]);
          that.setData({desc:res.data.items[0]});
      });
  }
})
