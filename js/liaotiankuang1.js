$(function(){
  
    $('#talkneirong').keypress(function (e){
    if(e.keyCode == 13){
      $('.send').click()
    }
    
})
  var json = [
    {
      name: '南伊',
      text: '你是好人',
      position: 'left'
    },
    {
      name: 'tt',
      text: '我跟着你',
      position: 'right'
    }]


  // 发送消息
 

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
      json.push({
        name: 'dd',
        text: vals,
        position: 'left' 
      }) 
    }
    else{
      json.push({
        name: 'tt',
        text: vals,
        position: 'right'
      })
    }
    var str = ''
    for(var i = 0;i<json.length;i++){
      if(json[i].position === 'left'){
        str += `<div class="talk_msg atalk"><span>南伊:${json[i].text}</span></div>`
      }else{
        str += `<div class="talk_msg btalk"><span>${json[i].text}:童童</span></div>`
      }
    }
    
    $('.talk').children().remove()
    $('.talk').append(str)

    //发送完数据后清空输入框
    $('.shuru').val('')
  })

  //点击单条信息可隐藏此单条信息
  $('.talk').on('click','.talk_msg',function(){
    var index = $(this).index()
    $(this).remove()
    json.splice(index,1)
    console.log(json)
  })

  //点击右上角，显示两个点击名字
  $('.p3').click(function(){
    $('.a>li').toggleClass('p4')
  })
  

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

