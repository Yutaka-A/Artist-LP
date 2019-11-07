$(function(){

  $('#login-show').click(function(){
    $('#login-modal').fadeIn();
  });

$('.qanda-list-item').click(function(){
  var $answer= $(this).find('.answer');
  if($answer.hasClass('open')){
    $answer.removeClass('open');
    $answer.slideUp();
    $(this).find('span').text('+');

  }else{
    $answer.addClass('open');

    $answer.slideDown();
    $(this).find('span').text('-');


  }
});


$(".js-offcanvas").hiraku({
    btn: ".js-offcanvas-btn",
    fixedHeader: ".js-fixed-header",
    direction: "right",
    breakpoint: 767
  });
  

  $('#top-btn').click(function(){
    $('html').animate({
      'scrollTop':0
    },'slow');
  });
  
  $('.container2 a').click(function(){
    $('.container2 a').removeClass('active');
    $(this).addClass('active');
  });

  $('header a').click(function(){
    var id = $(this).attr("href");
    var position = $(id).offset().top;
    $('html,body').animate({"scrollTop":position},500);
  });
});

jQuery(window).on("scroll", function($) {
  if (jQuery(this).scrollTop() > 100) {
    jQuery('.floating').show();
  } else {
    jQuery('.floating').hide();
  }
});

jQuery('.floating').click(function () {
  jQuery('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});
