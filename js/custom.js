$('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 300);
    return false;
});

$('a').css("color","white");

$('a').mouseleave(function(){
  $(this).css("color","white")
});

$('a').mouseenter(function(){
  $(this).css("color","#e7e7e7")
});

$('.navbar').hide();

$(window).scroll(function(){
  if ($(this).scrollTop() > 600){
    $('.navbar').fadeIn();
  } else {
    $('.navbar').fadeOut();
  }
});
