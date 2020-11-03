// один обработчки на все кнопки купить и появление popup start
$('.btns-card').click(function(e) {
    
    if(e.target.getAttribute('class') === 'best-sellers-footer__button') {
        $('.best-sellers-footer__button').css({"display":"none"});
        $('.wrapper-popup').fadeIn().css({"display":"flex"});
    }

  })
// один обработчки на все кнопки купить и появление popup end


// start закрытие popup по крестику
  $('.close-popup').click(function() {
    $('.wrapper-popup').fadeOut();
  })
  // end закрытие popup по крестику


//   start закрытие popup по области
  $(document).mouseup(function(e) {
    let popup = $('.popup');
    
    if(!popup.is(e.target) && popup.has(e.target).length ===0) {
    
        $('.wrapper-popup').fadeOut()
    }

      $('.best-sellers-footer__button').css({"display":"block"});
  })
  //   end закрытие popup по области



  
  // header popup связаться с нами
$('.header-button').click(function() {
  $('.wrapper-popup').css({ "display": "flex" });
})