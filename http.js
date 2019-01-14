//使用小程序中wx.request封装Promise

module.exports=(url,data)=>{
    return new Promise((resolve,reject)=>{
      wx.request({
        url: 'https://locally.uieee.com/'+url,
        success: resolve,
        fail: reject
      })
    })
  }