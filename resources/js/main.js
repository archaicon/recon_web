/**
 * Created by SudharsanPrabu on 9/3/16.
 */
$(document).ready(function() {
    $('.animsition').animsition();
    setTimeout(func, 5000);
    function func() {
        $('#anim1').css('-webkit-animation-delay', '0.0s');
        $('#anim1').css('animation-delay', '0.0s');
        $('#anim2').css('-webkit-animation-delay', '0.0s');
        $('#anim2').css('animation-delay', '0.0s');
    }
});

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 600);
});