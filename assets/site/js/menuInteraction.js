$(document).ready(function() {
  var scrollTop = 0
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop()
      if (scrollTop >= 100) {
      $('.header, .scrolltop').addClass('show')
    } else if (scrollTop < 100) {
      $('.header, .scrolltop').removeClass('show')
    }
  })
})