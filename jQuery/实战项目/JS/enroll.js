// 注册逻辑
$('form').on('submit',function (e){
    // 阻止默认行为
    e.preventDefault()
    // 采集用户信息
    const data = $('form').serialize();
    // console.log(data);
    // 发送请求
    $.post('http://localhost:8888/users/register',data,res=>{
        if(res.code === 0){
            $('form > span').css('display','block');
            return
        }else{
            window.alert('恭喜注册成功')
            window.location.href = './login.html'
        }


    })
})