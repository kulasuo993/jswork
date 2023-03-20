var pass = document.getElementById('#nb2')
var eye = document.getElementById('#eye')
eye.onclick = function(){
    if(pass.type == 'text'){
        pass.type == 'password'
        eye.class = 'fa fa-eye'
    }
    else{
        pass.type == 'text'
        eye.class = 'fa fa-eye-slash'
    }
}