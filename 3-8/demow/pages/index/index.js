//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    images: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    list:[
      {title:'习京平会见习京平会见习京平会见',
      pic:'../../images/pic_1.png',
      istop:true,
      iszhuanti:true,
      commentcount:'111'
      },
      {title:'习京平会见习京平会见习京平会见',
      pic:'../../images/pic_1.png',
      istop:true,
      iszhuanti:true,
      commentcount:'111'
      },
      {title:'习京平会见习京平会见习京平会见',
      pic:'../../images/pic_1.png',
      istop:true,
      iszhuanti:true,
      commentcount:'111'
      },
      {title:'习京平会见习京平会见习京平会见',
      pic:'../../images/pic_1.png',
      istop:true,
      iszhuanti:true,
      commentcount:'111'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
