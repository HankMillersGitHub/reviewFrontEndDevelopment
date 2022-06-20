// 商品列表逻辑
// 渲染用户信息
const token = window.localStorage.getItem('token');
const id = window.localStorage.getItem('id');
if(!token||!id){
    window.alert('登录失效,请重新登录')
    window.location.href = './login.js'
}
getInfo()
// 显示用户简易信息
function getInfo(){
    $.ajax({
        url:'http://localhost:8888/users/info',
        method:"GET",
        data:{id:id},
        headers:{authorization:token},
        success(res){
            if(res.code!==1){
                $('.off').addClass('active')
                $('.on').removeClass('active')
            }else{
                $('.on').addClass('active').find('span').text(res.info.nickname)
                $('.off').removeClass('active')
            }

        }
    })
}
// 1. 请求商品分类
getCateList()

function getCateList() {
    $.get('http://localhost:8888/goods/category', res => {
        //    渲染分类内容
        let str = `<li class="active">全部</li>`;
        res.list.forEach(item => {
            str += `<li>${item}</li>`
        })
        $('.category').html(str);
    })
}

// 2. 请求商品列表
// 2.1 请求需要用到的参数
const info = {
    current: 1,
    pageSize: 12,
    search: '',
    filter: '',
    saleType: 10,
    sortType: 'id',
    sortMethod: 'ASC',
    category: ''
}
let totalPage = 1
// 2.2 请求数据
getGoodsList()

function getGoodsList() {
    $.get('http://localhost:8888/goods/list', info, res => {
        //    渲染分类内容
        totalPage = res.total
        bindHtml(res);
    })
}

// 渲染商品列表
function bindHtml(res) {
//    1. 判断当前页 如果是第一页 left按钮有disable
    if (info.current === 1) {
        $('.left').addClass('disable')
    } else {
        $('.left').removeClass('disable')
    }
//    2.判断当前页  如果是最后一页 right按钮有disable
    if (info.current === res.total) {
        $('.right').addClass('disable')
    } else {
        $('.right').removeClass('disable')
    }
//    3. 渲染当前位置
    $('.total').text(`${info.current} / ${res.total} `)
//    4. 渲染一页显示多少条
    $('select').val(info.pageSize)
//    5. 渲染当前页
    $('.page').val(info.current)
//    6. 渲染商品列表
    let str = ``;
    console.log(res);
    res.list.forEach(item => {
        str += ` <li goodsId="${item.goods_id}">
        <div class="show">
            <img src="${item.img_big_logo}" alt="">
            ${item.is_hot ? '<div class="hot">hot</div>' : ''}
            ${item.is_sale ? '<div class="sale">sale</div>' : ''}
        </div>
        <div class="info">
            <p class="title">${item.title}</p>
            <p class="price">
                <span class="current">￥${item.current_price}</span>
                <span class="old">￥${item.price}</span>

            </p>
            <button goodsId = ${item.goods_id}>加入购物车</button>
        </div>
    </li>`
    })
    $('.list').html(str);

}

// 各种事件渲染
// 分类
$('.category').on('click', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active')
    info.category = $(this).text() === '全部' ? '' : $(this).text()
//    因为切换分类会影响当前有多少页  所以最好回归到第一页
    info.current = 1;
//    重新请求列表数据
    getGoodsList();

})
// 筛选
$('.filter').on('click', 'li', function () {
//    切换类名
    $(this).addClass('active').siblings().removeClass('active')
//    修改info中的数据
    info.filter = $(this).attr('type')
    info.current = 1;
//    重新渲染页面
    getGoodsList()
})
// 折扣
$('.sale').on('click', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active')
    info.saleType = $(this).attr('sale')
    info.current = 1;
    getGoodsList()
})
// 排序
$('.sort').on('click', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active')
    info.sortType = $(this).attr('type')
    info.sortMethod = $(this).attr('sort')
    info.current = 1
    getGoodsList()
})
// 模糊搜索
$('.search').on('input', function () {
    info.search = $(this).val().trim()
    info.current = 1
    getGoodsList()
})
// 各种分页信息
// 1. 上一页
$('.left').on('click', function () {
    if ($(this).hasClass('disable')) return
//     修改info中的信息
    info.current--;
    getGoodsList()
})
// 2. 下一页
$('.right').on('click', function () {
    if ($(this).hasClass('disable')) return
//     修改info中的信息
    info.current++;
    getGoodsList()
})
// 每页显示多少
$('select').on('change', function () {

    info.pagesize = $(this).val()
    info.current = 1;
    getGoodsList()
})
// 3. 直接跳转
$('.turnTo').on('click', function () {
    // e.preventDefault()
    let page = $('.page').val()
    if (isNaN(page)) page = 1
    if (page <= 1) page = 1
    if (page >= totalPage) page = totalPage

    info.current = page;
    getGoodsList()
})

//  接入购物车
$('.list').on('click', 'button', function (e) {
    // 阻止事件传播
    e.stopPropagation()
    const token = window.localStorage.getItem('token')
    const id = window.localStorage.getItem('id')
    if (!token || !id)
        window.location.href = './login.html'
    $.ajax({
        url: 'http://localhost:8888/cart/add',
        method: 'POST',
        data: {id: id, goodsId: $(this).attr('goodsId')},
        headers: {authorization: token},
        success(res) {
            if(res.code !== 1){

                return
            }
            window.alert('加入成功')

        }


    })


})

// 切换详情页
$('.list').on('click', 'li', function () {
    window.localStorage.setItem('goodsId', $(this).attr('goodsId'))
    window.location.href = './detail.html'
    console.log(2);
})