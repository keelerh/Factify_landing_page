$('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 300);
    return false;
});

$('a').mouseleave(function(){
  $(this).css("color","gray")
});

$('a').mouseenter(function(){
  $(this).css("color","black")
});
