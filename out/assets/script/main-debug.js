$('.button-contato').click(function(){
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 800);
    return false;
});

$('#go-contato').click(function(){
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 600);
    return false;
});