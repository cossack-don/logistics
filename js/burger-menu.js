$('.wrapper-menu-burger__burger').click(function() {
    
    $('.wrapper-menu-burger__icons').css({"display":"none"})
    $('.wrapper-menu-burger__menu').fadeIn().css({"display":"block"});
    
})


$('.wrapper-menu-burger__menu-close').click(function() {
   $('.wrapper-menu-burger__menu').fadeOut().css({"display":"none"})
   $('.wrapper-menu-burger__icons').fadeIn().css({"display":"flex"})
})


$(document).mouseup(function(e) {
    let menuBurger = $('.wrapper-menu-burger');
    
    if(!menuBurger.is(e.target) && menuBurger.has(e.target).length ===0) {
    
    $('.wrapper-menu-burger__menu').css({"display":"none"})
    $('.wrapper-menu-burger__icons').fadeIn().css({"display":"flex"})
    }

  })