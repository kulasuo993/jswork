$(function(){
    function getParam(key){
        var searchStr = window.location.search
        if(searchStr.indexOf('?') !== -1){
            var str = searchStr.substr(1)
            var newstr = str.split('&')
            var obj = {}
            for (i = 0 ; i < newstr.length ; i++){
                var new1 = newstr[i].split('=')
                obj[new1[0]] = new1[1]
            }
            if(obj[key] !== undefined ){
                return obj[key]
            }else{
                return null
            }
        }
        else{
            return null
        }
    }
    let appId = getParam('app_id');
    let appKey = getParam('app_key');
    let code = ''; // 存放用户code标识

  
    clickFun()

    function clickFun(){
        
        $('#t1').click(function(){
        $(this).addClass('gang').siblings('span').removeClass('gang')
        $('.box1').show().siblings('.box2').hide()
        $('.fa').addClass('fa-eye-slash').removeClass('fa-eye')
        $('.pass').attr('type','password')
        })

        $('#t2').click(function(){
            $(this).addClass('gang').siblings('span').removeClass('gang')
            $('.box2').show().siblings('.box1').hide()
            $('.fa').addClass('fa-eye-slash').removeClass('fa-eye')
            $('.pass').attr('type','password')
        })

        $('#area1').click(function(){
            var myselect=document.getElementById("area1");
            var index=myselect.selectedIndex 
            var nbb = myselect.options[index].value
            // console.log(nbb)
            $('.check-list').text(nbb)
        })
        $('#area2').click(function(){
            var myselect=document.getElementById("area2");
            var index=myselect.selectedIndex 
            var nbb = myselect.options[index].value
            // console.log(nbb)
            $('.check-list').text(nbb)
        })

        $('.nb1').blur(function(){
            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
            const phone = $(this).val()
            if(phone === ''){
                $('.appear span').text('手机号码不能为空')
                $('.appear').fadeIn(1000,function(){
                    $('.appear').fadeOut(3000)  
                })
                return
            }
            if(!myreg.test(phone)){
                $('.appear span').text('请输入正确的手机号码')
                $('.appear').fadeIn(1000,function(){
                    $('.appear').fadeOut(3000)  
                })
                return
            }
        })

        $('.box2 .nb2').blur(function(){
            var sMs = /^[0-9]{6}$/
            const phone1 = $(this).val()
            if(phone1 === ''){
                $('.appear span').text('请输入验证码')
                $('.appear').fadeIn(1000,function(){
                    $('.appear').fadeOut(3000)  
                })
                return
            }
            if(!sMs.test(phone1)){
                $('.appear span').text('请输入正确格式的验证码')
                $('.appear').fadeIn(1000,function(){
                    $('.appear').fadeOut(3000)  
                })
                return
            }
        })
        $('.box1').keypress(function (e){
            if(e.keyCode == 13){
                $('.box1 .end').click()
            }
        })
        $('.box2').keypress(function (e){
            if(e.keyCode == 13){
                $('.box2 .end1').click()
            }
        })

        $('.box1 .end').click(function(){
            const area =  $('.check-list').text()
            const userName = $('.box1 .nb1').val()
            const passWord = $('.box1 .nb2').val()
            if(userName === ''){
                $('.appear span').text('手机号码不能为空')
                $('.appear').fadeIn(1000,function(){
                    $('.appear').fadeOut(3000)  
                })
                return
            }
            if(passWord === ''){
                $('.appear span').text('请输入密码')
                $('.appear').fadeIn(1000,function(){
                    $('.appear').fadeOut(3000)  
                })
                return
            }

            if(!$('#ck').prop('checked')){
                $('.appear span').text('请同意服务条款')
                $('.appear').fadeIn(1000,function(){
                    $('.appear').fadeOut(3000)  
                })
                return
            }
            
            let params = {
                app_id : appId,
                username : `${area}_${userName}`,
                password : passWord,
                type : 'password'
            }
            fetchPost('https://api-test.iyingdi.com/ydsdk/login',params).then(res => {
                const authorInfo = res.data;
                code = authorInfo.code;
                $('.box').hide();
                $('.authorization').show();
                $('.authorization .item span').text(authorInfo.game_name);
                $('.authorization .info img').attr('src', authorInfo.avatar);
                $('.authorization .info span').text(authorInfo.nickname);
            }).catch(err => {
                console.log(err)
                $('.appear span').text(err)
                $('.appear').fadeIn(1000,function(){
                    $('.appear').fadeOut(3000)  
                })
            })
        })
        

        $('.box2 .end1').click(function(){
            const userName = $('.box2 .nb1').val()
            const passWord = $('.box2 .nb2').val()
            const area =  $('.check-list').text()
            if(userName === ''){
                $('.appear span').text('手机号码不能为空')
                $('.appear').fadeIn(1000,function(){
                    $('.appear').fadeOut(3000)  
                })
                return
            }
            if(passWord === ''){
                $('.appear span').text('请输入验证码')
                $('.appear').fadeIn(1000,function(){
                    $('.appear').fadeOut(3000)  
                })
                return
            }
            if(!/^[0-9]{6}$/.test(passWord)){
                $('.appear span').text('请输入正确格式的验证码')
                $('.appear').fadeIn(1000,function(){
                    $('.appear').fadeOut(3000)  
                })
                return
            }
            if(!$('#ck1').prop('checked')){
                $('.appear span').text('请同意服务条款')
                $('.appear').fadeIn(1000,function(){
                    $('.appear').fadeOut(3000)  
                })
                return
            }
            
            let params = {
                app_id : appId,
                username : `${area}_${userName}`,
                password : passWord,
                type : 'sms'
            }
            fetchPost('https://api-test.iyingdi.com/ydsdk/login',params).then(res => {
                const authorInfo = res.data;
                code = authorInfo.code;
                $('.box').hide();
                $('.authorization').show();
                $('.authorization .item span').text(authorInfo.game_name);
                $('.authorization .info img').attr('src', authorInfo.avatar);
                $('.authorization .info span').text(authorInfo.nickname);
            }).catch(err => {
                console.log(err)
                $('.appear span').text(err)
                $('.appear').fadeIn(1000,function(){
                    $('.appear').fadeOut(3000)  
                })
            })
        })

        
        $('.fa').click(function(){
            if($('.pass').attr("type") == "password"){
            $('.pass').attr("type","text")
                $('.fa').removeClass('fa-eye-slash').addClass('fa-eye')
            }
            else{
                $('.pass').attr('type','password')
                $('.fa').removeClass('fa-eye').addClass('fa-eye-slash')
            }
        })


        var time = 60
        let timer1 = null // 定时器

        $('.Verification_Code').click(function(){
            let userName = $('.box2 .nb1').val();
            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if(userName === ''){
                $('.appear span').text('手机号码不能为空')
                $('.appear').fadeIn(1000,function(){
                    $('.appear').fadeOut(3000)  
                })
                return
            }

            if(!myreg.test(userName)){
                $('.appear span').text('请输入正确的手机号码')
                $('.appear').fadeIn(1000,function(){
                    $('.appear').fadeOut(3000)  
                })
                return
            }

            if(!timer1){
                timer1 = setInterval(function(){
                    if(time > 0 && time <= 60){
                        time--
                        if(time > 0){
                            $('.Verification_Code').text(time+'后再次发送')  
                        }else{
                            $('.Verification_Code').text('获取验证码')   
                            time = 60
                            clearInterval(timer1)
                            timer1 = null // 清空定时器
                        }
                    }
                }, 1000)
            }
            let params = {
                app_id : appId,
                username : `86_${userName}`,
            }
            fetchPost('https://api-test.iyingdi.com/ydsdk/get-token',params).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
                $('.appear span').text(err)
                $('.appear').fadeIn(1000,function(){
                    $('.appear').fadeOut(3000)  
                })
            })
        })
        
        $('.btn').on('click',function(){
            let params = {
                app_id: appId,
                code: code
            }
            fetchPost('https://api-test.iyingdi.com/ydsdk/h5-auth-token',params).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
                $('.appear span').text(err)
                $('.appear').fadeIn(1000,function(){
                    $('.appear').fadeOut(3000)  
                })
            })
        })
    }

    /* 将参数以ASCII码排序
        * @param params
        * @return {{}}
        */
    function sortObjByASCII(params) {
        console.log(params)
        const keysArr = Object.keys(params).sort()
        const sortObj = {}
        for (const i in keysArr) {
        sortObj[keysArr[i]] = params[keysArr[i]]
        }
        console.log(sortObj)
        return sortObj
    }

    function fetchPost(url,params){
        const this_ = this
        let temp = null
        const paramData = sortObjByASCII(params)
        let sign = ''
        for(const item in paramData){
        sign += `${item}=${paramData[item]}&`
        }
        sign = `${sign}key=${appKey}`
        paramData.sign = CryptoJS.MD5(sign).toString()
        temp = Qs.stringify(paramData)
        return new Promise((resolve,reject) => {
            axios.post(url, temp).then(response => {
                resolve(response)
            }).catch((error) => {
                console.log(error.response)
                reject(error.response.data.retMsg)
            })
        })
    }
})