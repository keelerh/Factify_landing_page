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

// setTimeout(function(){
//   $('#background-video').play();
// }, 10000);

setTimeout(delayVideo, 2000);

function delayVideo(){
  $('#background-video').get(0).play();
}

$(window).scroll(function(){
  if ($(this).scrollTop() > 10){
    $('.navbar').fadeIn();
  } else {
    $('.navbar').fadeOut();
  }
});

$(window).resize(function resize(){
  if ($(this).width() < 767){
    return $('.info').removeClass('flex');
  }
  else {
    $('.info').addClass('flex');
  }
})
