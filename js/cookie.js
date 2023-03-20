window.onload = function(){
    document.cookie = 'username=xiaohong'
    function setCookie(name, value, day, domain){
        if(day == undefined){
            day = 0
        }
        if(domain == undefined){
            domain = '/'
        }
        var time = ''
        if(day > 0){
            time = new Date()
            time.setTime(time.getTime() + day*24*60*60*1000)
            time = 'expires='+ time.toGMTString() +';'
            console.log(time)
        }
        document.cookie = name + '=' + encodeURIComponent(value) + ';' + time + 'path=' + domain;

    }
    setCookie('user6', 'aini', 5)

    console.log(document.cookie)
    
    function getCookie(name){
        var cookie1 = document.cookie
        var cookie2 = cookie1.split(";");
        console.log(cookie2)
        //去掉空格
        array = cookie2.map(function (el) {
        return el.trim()
        })
        console.log(array)
        var obj = {}
        for(i = 0 ; i < array.length ; i++){
            var cookie3 = array[i].split('=')
            obj[cookie3[0]] = cookie3[1]
        }
        console.log(obj)
        if(obj[name] !== undefined){
            return obj[name]
        }
        else{
            return '666'
        }
    }
      console.log(getCookie('user6')) 
     
      
    //删除cookie
    function delCookie(name, domain){
        if(domain == undefined){
            domain = '/'
        }
        var exp = new Date(),
        value = getCookie;
        exp.setTime(exp.getTime() - 1*24*60*60*1000)
        var time = 'expires='+ exp.toGMTString() +';'
        document.cookie = name + '=' + encodeURIComponent(value) + ';' + time + 'path=' + domain;
    }
    // delCookie('/user6', '/') // 设置主域
}
