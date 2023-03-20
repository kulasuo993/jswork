// $(function(){
//     $('send').click(function(){
//         var vals = $('.shuru').val()
//         if(vals == ''){
//             alert('你不是好人！')
//             return
//         }
//         var xuanren = $('#who').val()
//         var str = ""
//         if(xuanren == 0){
//             str = '<div class="atalk"><span>昝迪:'+vasl+'</span></div>'
//         }
//         else{
//             str = '<div class="atalk"><span>昝迪:'+vasl+'</span></div>'
//         }
//         $('#who').html($('.talk').html()+str)
//         $('#who').val('')
//     })
// })

$(function(){
    $('.send').click(function(){
      //发送单击，获取用户输入的数据value属性值
      var vals=$('#talkneirong').val()
      //如果输入的数据为空，则弹窗提示
      if (vals=='')
      {
        $('.appear').fadeIn(1000,function(){
          $('.appear').fadeOut(3000)  
       })
        return
      }
      //条件下拉列表中的value值是0还是1
      var xuanren=$('#who').val()
      var str=""
      //选择A发送还是B发送
      if (xuanren == 0){
        str='<div class="atalk"><span>南伊:'+ vals+'</span><div class="delete"></div></div>'
       
      }
      else{
        str='<div class="btalk"><div class="delete"></div><span>'+ vals+':童童</span></div>'
      }
      //原有的内容+str,否则会覆盖掉原有内容
      $('.talk').html($('.talk').html()+str)

      //发送完数据后清空输入框
      $('.shuru').val('')
      //点击单条信息可隐藏此单条信息
      
    })
    $('.talk').on('click','.delete',function(){
      $(this).parent().remove()
      
    })
    //点击右上角，显示两个点击名字
    $('.p3').click(function(){
      $('.a>li').toggleClass('p4')
    })
    // $('.p3').click(function(){
    //   $('.p4').show()
    // })
    //  $('.p3').dblclick(function(){
    //   $('.p4').hide()
    // })

//点击清空内容 清空聊天框
    $('.qingkong').click(function(){
      $('.talk').text('')
    })

    $('.tupian').click(function(){
      $('.box1').toggleClass('box11')
      })

      $('.her').click(function(){
        $('.atalk').text('')
      })
      $('.my').click(function(){
        $('.btalk').text('')
      })

     
    })

