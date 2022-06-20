// 详情页逻辑
// 1. 验证是否是从列表页跳转
const goodsId = window.localStorage.getItem('goodsId')
if(!goodsId){
    window.location.href = './goods.html'
}

// 2. 根据id请求信息
getInfo()
function getInfo(){
    $.get('http://localhost:8888/goods/item',{id:goodsId},function (res){
    //    填充页面
        $('.show>img').prop('src',res.info.img_big_logo)
        $('.info>.title').text(res.info.title)
        $('.info>.price').text('$'+res.info.current_price)
    })
}




