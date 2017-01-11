var subjectsUtil = require("../../utils/subjectsUtil.js");
Page({
  data:{
    detail:[],
    commit:[],
    lodaingHidden:false
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    var page=this;
    
    var id=options.id;
    wx.request({

      url: 'https://api.douban.com/v2/movie/subject/'+id,
      
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       header: {'Content-Type':'json'}, // 设置请求的 header
      success: function(res){
     
        // console.log(res.data);
        page.setData({"detail":res.data,"loadingHidden":true});
        // console.log(page.data.detail);

      }
     
    })
    wx.request({
          url:'https://api.douban.com/v2/movie/subject/25894431/comments',
          method:'GET',
          header:{'Content-Type':'json'},
          success:function (res) {
            console.log(res.data);
            // body...
          }
        })
    
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  }
 
})