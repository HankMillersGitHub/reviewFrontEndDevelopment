// 购物车逻辑
const token = window.localStorage.getItem('token')
const id = window.localStorage.getItem('id')
if (!token || !id) {
    window.location.href = './login.html'
} else {
//    请求购物车数据进行渲染
    getCartList()
}
// 渲染购物车数据
function getCartList() {
    $.ajax({
        url: 'http://localhost:8888/cart/list',
        method: 'GET',
        data: {id: id},
        headers: {authorization: token},
        success(res) {
            if (res.code !== 1) {
                window.location.href = './login.html';
                return
            }
            bindHtml(res)

        }
    })

}

// 渲染页面
function bindHtml(res) {
// 判断渲染empty还是list
    if (!res.cart.length) {
        $('.empty').addClass('active')
        $('.list').remove('active')
    }
    //统计数组
    let selectNum = 0;
    let totalNum = 0;
    let totalPrice = 0;
    res.cart.forEach(item => {
        if (item.is_select) {
            selectNum++;
            totalNum += item.cart_number
            totalPrice += item.cart_number * item.current_price
        }
    });
    //渲染数字
    let str = `<div class="top">全选<input class="selectAll" type="checkbox" ${selectNum === res.cart.length ? 'checked' : ''}>

        </div>
        <ul class="center">
        `
    res.cart.forEach(item => {
        str += `<li>
                <div class="select"><input ${item.is_select === true ? 'checked' : ''} type="checkbox" goodsId = "${item.goods_id}"}></div>
                <div class="show"><img src="${item.img_small_logo}" alt=""></div>
                <div class="title">${item.title}</div>
                <div class="price">￥${item.current_price}</div>
                <div class="number">
                    <button class="sub" goodsId = "${item.goods_id}" ${item.cart_number <= 1 ? 'disabled' : ''}>-</button>
                    <input type="text" value="${item.cart_number}" class="cart_number">
                    <button class="add" goodsId = "${item.goods_id}" ${item.cart_number >= item.goods_number ? 'disabled' : ''}>+</button>
                </div>
                <div class="subPrice">${(item.current_price * item.cart_number).toFixed(2)}</div>
                <div class="delete del"><button goodsId = "${item.goods_id}">删除</button></div>
            `
    });
    str += `</li>
        </ul>
        <div class="bottom">
            <p>
                共计<span>${totalNum}</span>件商品
            </p>
            <div class="btns">
                <button class="clear">清空购物车</button>
                <button class="delSelect" ${selectNum === 0 ? 'disabled' : ''}>删除已选</button>
                <button class="pay" ${selectNum === 0 ? 'disabled' : ''}>去支付</button>        
            </div>
            <p>
                共计￥<span>${totalPrice.toFixed(2)}</span>
            </p>    
                
        </div>
`
    $('.list').html(str);
}

// 点击事件
// 1. 选中
$('.list').on('click', '.center .select input', function () {
    $.ajax({
        url: 'http://localhost:8888/cart/select',
        method: 'POST',
        headers: {authorization: token},
        data: {id: id, goodsId: $(this).attr('goodsId')},
        success(res) {

        }
        //    重新渲染

    })
    getCartList()
})
// 2. 单一商品数量增加
$('.list').on('click', '.center .number .add', function () {

    $.ajax({
        url: 'http://localhost:8888/cart/number',
        method: 'POST',
        headers: {authorization: token},
        data: {
            id: id,
            goodsId: $(this).attr('goodsId'),
            number: $(this).prev().val()-0+1
        },
        success(res) {
        }
    })
    getCartList()
})
$('.list').on('click', '.center .number .sub', function () {
    $.ajax({
        url: 'http://localhost:8888/cart/number',
        method: 'POST',
        headers: {authorization: token},
        data: {
            id: id,
            goodsId: $(this).attr('goodsId'),
            number: $(this).next().val()-0-1
        },
        success(res) {
            console.log(res);
        }
    })
    getCartList()
})
// 清空购物车
$('.list').on('click','.clear',function (){
    $.ajax({
        url:'http://localhost:8888/cart/clear',
        method:'GET',
        data:{id:id},
        headers:{authorization:token},
        success(res){
            console.log(res);
        }
    })
})
// 去支付
$('.list').on('click','.pay',function (){
    $.ajax({
        url:'http://localhost:8888/cart/pay',
        method:'POST',
        data:{id:id},
        headers:{authorization:token},
        success(res){
            console.log(res);
        }
    })
})
// 删除
$('.list').on('click','.center .del',function (){
    console.log($(this).attr('goodsid'));
    $.ajax({
        url:'http://localhost:8888/cart/remove',
        method:'GET',
        headers:{authorization:token},
        data:{id:id,goodsId:$(this).attr('goodsId')},
        success(res){
            console.log(res);
        }

    });
    getCartList()
})
// 全选
$('.list').on('click','.selectAll',function (){
    const type = $(this).prop('checked'?1:0)
    console.log(type);
})

// 删除全部已选商品
$('.list').on('click','.bottom .delSelect',function (){
    $.ajax({
        url:'http://localhost:8888/cart/list',
        method:'GET',
        data:{id:id},
        headers:{authorization:token},
        success(res){
            console.log(res);
            const obj = {};
            res.cart.forEach(item=>{
                item.goodsId.prop(obj);
            })
            console.log(obj);
        }
    })
})