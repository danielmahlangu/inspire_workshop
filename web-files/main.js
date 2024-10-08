

var nav_menu_btn = document.getElementsByClassName("nav-menu-btn")
var close_btn = document.getElementsByClassName("btn-close")

nav_menu_btn[0].addEventListener("click", function(){
       
    document.getElementsByClassName('small-screen-nav-menu')[0].style.left = '0%'

});


close_btn[0].addEventListener("click", function(){

    document.getElementsByClassName('small-screen-nav-menu')[0].style.left = '-30%'

})