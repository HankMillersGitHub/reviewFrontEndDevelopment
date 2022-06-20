// 如何知道已经登陆成功
// 通过登陆成功之后的token
// 拿到存储的token
const token = window.localStorage.getItem('token')
const id = window.localStorage.getItem('id')
// 判断拿到的数据 进行后续操作
if(!token||!id){
    // 登陆失败
    $('off').addClass('active')
    $('on').removeClass('active')
}else{
    // 登陆成功
    getInfo()
}
// 显示用户简易信息
function getInfo(){
    $.ajax({
        url:'http://localhost:8888/users/info',
        method:"GET",
        data:{id:id},
        headers:{authorization:token},
        success(res){
            console.log(res);
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

// 个人中心
$('button.self').on('click',function (){
    window.location.href = './self.html'
})
console.log(id);
// 退出登录
$('button.logout').on('click',function (){
    $.get('https://localhost:8888/users/logout',{id:id},res =>{
        // 退出刷新页面
        window.location.reload()
    })
})