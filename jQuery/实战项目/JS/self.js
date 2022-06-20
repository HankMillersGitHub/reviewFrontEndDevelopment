// 个人中心逻辑
// 1. 验证登录
const token = window.localStorage.getItem('token')
const id = window.localStorage.getItem('id')
if (!token || !id) {
    window.alert('您未登录，点击确定返回登录');
    window.location.href = ('./login.html');
} else {
    // 登陆过的状态
    getInfo()
}

// 获取用户信息 并展示
function getInfo() {
    $.ajax({
        url: 'http://localhost:8888/users/info',
        method: "GET",
        data: {id: id},
        headers: {authorization: token},
        success(res) {
            // 判断是否已经注销登录
            if (res.code !== 1) {
                window.alert('登陆过期，请点击确定重新登陆')
                window.location.href = './login.html'
                return
            } else {
                $('form [name = username]').val(res.info.username)
                $('form [name = nickname]').val(res.info.nickname)
                $('form [name = age]').val(res.info.age)
                $('form [name = gender]').val(res.info.gender)
            }

        }
    })
}

// 修改用户信息
$('form').on('submit',function (e){
    e.preventDefault()
    const data = $('form').serialize()
    console.log(data);
    $.ajax({
        url: 'http://localhost:8888/users/update',
        method: 'POST',
        data: data + '&id='+id,
        headers: {authorization: token},
        success(res) {
            if(res.code === 1 ){
                window.alert('修改成功')
                window.location.href = './index.html'
            }else{

            }
        }

    })
})
