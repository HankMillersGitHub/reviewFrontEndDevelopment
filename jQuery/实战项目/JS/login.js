// 登录逻辑
$('form').on('submit',function (e){
    // 阻止默认行为
    e.preventDefault()
    // 采集用户信息
    const data = $('form').serialize();
    console.log(data);
    // 发送请求
    $.post('http://localhost:8888/users/login',data,res=>{
        if(res.code === 0){
            $('form > span').css('display','block');
            return
        }else{
            window.alert('恭喜登录成功')
            // 登陆成功后需要把token和id存储起来
            window.localStorage.setItem('token',res.token);
            window.localStorage.setItem('id',res.user.id);
            window.location.href = './index.html'

        }


    })
})