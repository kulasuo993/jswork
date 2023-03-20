$(function(){

    let appId = 100000;
    let appKey = 123456;
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
    $('.box1 .end').click(function(){
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
            username : `86_${userName}`,
            password : passWord,
            type : 'password'
        }
        fetchPost('https://api-test.iyingdi.com/ydsdk/login',params).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
            $('.appear span').text(err)
            $('.appear').fadeIn(1000,function(){
                $('.appear').fadeOut(3000)  
             })
        })



        
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

   
    // $('.Verification_Code').text(time+'后再次发送')
    // $('.Verification_Code').text('获取验证码')
    // var Verification_Code = $('.Verification_Code')
    var abc =  $('.Verification_Code').attr('bollen')
        
    var flag = true
    var time = 3
        $('.Verification_Code').click(function(){
           
            if(flag&time>0){
                    console.log(111)
                        var timed = setInterval(countDown,1000)
                        function countDown(){
                        time --
                        flag = false
                        $('.Verification_Code').text(time+'后再次发送')
                    }
                }
                else{
                    clearInterval(timed)
                    $('.Verification_Code').text('获取验证码')
                    time =3
                    // flag = true
                }
                
            
        })
    
    
    
    
    
        
        // const userName = $('.box2 .nb1').val()
        // const passWord = $('.box2 .nb2').val()
        // if(userName === ''){
        //     $('.appear span').text('手机号码不能为空')
        //     $('.appear').fadeIn(1000,function(){
        //         $('.appear').fadeOut(3000)  
        //      })
        //      return
        // }
        // let params = {
        //     app_id : appId,
        //     username : `86_${userName}`,
        //     password : passWord,
        //     type : 'sms'
        // }
        // fetchPost('https://api-test.iyingdi.com/ydsdk/get-token',params).then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        //     $('.appear span').text(err)
        //     $('.appear').fadeIn(1000,function(){
        //         $('.appear').fadeOut(3000)  
        //      })
        // })
        // /* 将参数以ASCII码排序
        // * @param params
        // * @return {{}}
        // */
        // function sortObjByASCII(params) {
        //     console.log(params)
        //     const keysArr = Object.keys(params).sort()
        //     const sortObj = {}
        //     for (const i in keysArr) {
        //     sortObj[keysArr[i]] = params[keysArr[i]]
        //     }
        //     console.log(sortObj)
        //     return sortObj
        // }
        // function fetchPost(url,params){
        //     const this_ = this
        //     let temp = null
        //     const paramData = sortObjByASCII(params)
        //     let sign = ''
        //     for(const item in paramData){
        //     sign += `${item}=${paramData[item]}&`
        //     }
        //     sign = `${sign}key=${appKey}`
        //     paramData.sign = CryptoJS.MD5(sign).toString()
        //     temp = Qs.stringify(paramData)
        //     return new Promise((resolve,reject) => {
        //         axios.post(url, temp).then(response => {
        //             resolve(response)
        //         }).catch((error) => {
        //             console.log(error.response)
        //             reject(error.response.data.retMsg)
        //         })
        //     })
        // }
       
    

    $('.box2 .end1').click(function(){
        const userName = $('.box2 .nb1').val()
        const passWord = $('.box2 .nb2').val()
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

        if(!$('#ck1').prop('checked')){
            $('.appear span').text('请同意服务条款')
            $('.appear').fadeIn(1000,function(){
                $('.appear').fadeOut(3000)  
             })
             return
         }
        
        let params = {
            app_id : appId,
            username : `86_${userName}`,
            password : passWord,
            type : 'sms'
        }
        fetchPost('https://api-test.iyingdi.com/ydsdk/login',params).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
            $('.appear span').text(err)
            $('.appear').fadeIn(1000,function(){
                $('.appear').fadeOut(3000)  
             })
        })
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
        // $('.end1').click(function(){
        //     if($('#ck1').prop('checked')){
        //        window.location.href="https://www.baidu.com/link?url=M7cVqDwAOsBmH8Kxn5Uht900IiBUzEptUw9uWV9xJk_&wd=&eqid=ad06edca000b339f0000000563e5eb97"
        //     }
        //     else{
        //         $('.appear').fadeIn(1000,function(){
        //             $('.appear').fadeOut(3000)  
        //          })
        //     }
        // })

    
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
            
        
//    $('.nb2').click(function(){
//     var abc = $('.nb1').val()
//     if (abc.length !== 11){
//         alert('请输入正确的号码')
//     }
//     else{
//         alert('请输入号码')
//     }
    
//    })
   
// $('.nb2').keyup(function(){
//     var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
//     if (!myreg.test(pone)) {
//       return false;
//     } else {
//       return true;
//     }
// })






})