$(".drop-down-link").on('click', function() {
  if ($(this).data('toggle') == '0') {
    $(this).find("i").removeClass('glyphicon-plus').addClass('glyphicon-minus');
    $(this).data('toggle', '1');
    $(this).addClass('drop-down-link-active');
    $(this).next().css("margin-top", "15px");
  } else {
    $(this).find("i").removeClass('glyphicon-minus').addClass('glyphicon-plus');
    $(this).data('toggle', '0');
    $(this).removeClass('drop-down-link-active');
    $(this).next().css("margin-top", "0px");

  }

});

$(".toggle-menu").on('click', function() {
  if ($('menu').data('hidden') == '0') {
    $('menu').data('hidden', '1');
    $('menu').css('left', '-203px');
    $('.menuIcon').css('margin-left', '209px');
    $('.brand').css('padding-top', '22px');
    $('.brand').css('padding-bottom', '24px');
    $('.collapse .link').css('padding-left', '0px');
    $('.link p').css('display', 'none');
    $(this).css('margin-left', '46px');
    $('main').css('padding-left', '50px');
    $('.large-logo').css('display', 'none');
    $('.small-logo').css('display', 'block');
    //$('main').css('filter', 'brightness(100%)');
  } else {
    $(this).css('z-index', '100');
    $('.brand').css('padding-top', '15px');
    $('.brand').css('padding-bottom', '15px');
    $('.menuIcon').css('margin-left', '10px');
    $('.link p').css('display', 'inline-block');
    $('menu').data('hidden', '0');
    $('menu').css('left', '0');
    $(this).css('margin-left', '250px');
    $(window).on('resize', function(){
      var win = $(this); 
      if (win.width() < 1200) {
        $('main').css('padding-left', '50px');
      } else {
      $('main').css('padding-left', '250px');
    }
      
    });
      $('.large-logo').css('display', 'block');
      $('.small-logo').css('display', 'none');
    }

});

$(window).on('resize', function(){
      var win = $(this); 
      if (win.width() < 900) {
        $('.top').css('margin-left','0');
        //$('main').css('filter', 'brightness(40%)');
        $('menu').css('position','fixed');
        $('menu').css('z-index','1');
        $('.toggle-menu').css('position','absolute');
        $('.pageTitle').css('margin-left','90px');
      }
   
});






var menuCounter = 0;
$(".glyphicon").on('click', function() {
  if(menuCounter % 2 == 0){
     $(".glyphicon--open-menu").css('display', 'none');
     $(".glyphicon-menu-hamburger").css('display', 'block');
  } else{
    $(".glyphicon-menu-hamburger").css('display', 'none');
    $(".glyphicon--open-menu").css('display', 'block');
    $(".glyphicon--open-menu").css('top', '8px');
  }

  menuCounter++;
});



$(".btnDelete").on('click',function(){
  $(".box--delete").css("display","block");
  $("body").css("background-color","#ff000085");
  $("body").css("z-index","567");
})

$(".glyphicon-remove-circle-delete-box").on('click',function(){
  $(".box--delete").css("display","none");
})