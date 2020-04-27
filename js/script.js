$(document).ready(function(){
    var menuBtn = $('.icon-menu');
    var menu = $('.header__top-menu');

    menuBtn.on('click', function(event){
        event.preventDefault();
        menu.toggleClass('active');
    })
});