// pages/nba/nba.js
Page({
  data:{
    teams:[]
  },
  onLoad:function(options){
    this.loadTeam()// 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  loadTeam(){
    var appkey='f3c68a3b820ecfd70f1add35cd1af1cf';
    var page=this;
    wx.request({
      url: 'https://v.juhe.cn/nba/all_team_info.php?'+'key='+appkey,
      
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       header: {'Content-Type':'json'}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data.result)
        page.setData({teams:res.data.result})

      }
     
    })
    
  }
})