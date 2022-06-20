// 判断登录
const token = window.localStorage.getItem('token')
const id = window.localStorage.getItem('id')
if (!token || !id) {
    window.alert('登录过期')
    window.location.href = './login.html'
} else {
    getInfo()
}

function getInfo() {


    // 发送请求  获取用户信息
    $.ajax({
        url: 'http://localhost:8888/users/info',
        method: 'GET',
        data: {id: id},
        headers: {'authorization': token},
        success(res) {
            if (res.code !== 1) {
                window.location.href = './login.html'
            }
        }
    })
    // 修改密码
    // 提交表单数据时先要阻止默认行为
    $('form').on('submit', function (e) {

        e.preventDefault()
        const data = $('form').serialize()
        $.ajax({
            url: 'http://localhost:8888/users/rpwd',
            method: 'POST',
            data: data + '&id=' + id,
            headers: {authorization: token},
            success(res) {
                if (res.code === 1) {
                    window.alert(res.message)
                    window.location.href = './login.html'
                }else if(res.code === 0){
                    $('form>span').css('display','block')
                }
            }
        })
    })

}