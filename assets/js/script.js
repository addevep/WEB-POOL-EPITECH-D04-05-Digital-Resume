$(document).ready(function() {
    $(this).scrollTop(0);

/////////////////////////////////////////////////////////////////
////////////////////////NAVBAR SCROLL ///////////////////////////
/////////////////////////////////////////////////////////////////    
var bgNavbar = $('#menu')
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
        bgNavbar.addClass('bg_navbar');
}
    else{
    bgNavbar.removeClass('bg_navbar');
}
})

/////////////////////////////////////////////////////////////////
//////////////////////// NAVBAR COLLAPSE ////////////////////////
/////////////////////////////////////////////////////////////////
$(document).ready(function(){
    $("#menu_expand_collapse").click(function() {
        $("#list").toggle();
    });
});

$(window).on('resize', function() {
    if($(window).width() > 767) {
        $("#list").css('display', 'block');
    } else {
        $("#list").css('display', 'none');
    }
});

/////////////////////////////////////////////////////////////////
//////////////////////FULLSCREEN IMG/////////////////////////////
/////////////////////////////////////////////////////////////////
$('img[data-fullscreen-img]').addClass('img-enlargable').click(function(){
    var src = $(this).attr('src');
    $('<div>').css({
        background: 'RGBA(0,0,0,.5) url('+src+') no-repeat center',
        backgroundSize: 'contain',
        width:'100%', height:'100%',
        position:'fixed',
        zIndex:'10000',
        top:'0', left:'0',
        cursor: 'zoom-out'
    }).click(function(){
        $(this).remove();
    }).appendTo('body');
});

/////////////////////////////////////////////////////////////////
//////////////////////////// COPYRIGHT //////////////////////////
/////////////////////////////////////////////////////////////////
let date =  new Date().getFullYear();
let curDate = document.getElementById('cur_date');
curDate.innerHTML = `©${date} Copyright : `;


/////////////////////////////////////////////////////////////////
////////////////////////// CONTACT EMAIL ////////////////////////
/////////////////////////////////////////////////////////////////
let email = document.getElementById('email');
emailCrypt = ('antoine.duquenne@' + 'epitech.eu');
email.setAttribute( 'href', `mailto:${emailCrypt}`);
email.innerHTML ='Evoyer un mail';

/////////////////////////////////////////////////////////////////
////////////////////////////// MODAL ////////////////////////////
/////////////////////////////////////////////////////////////////
var modal = $('#qsj_modal');
var btn = $('.qsj_modal_btn');
var close = $('.close');
btn.click(function() {
    modal.css('display', 'block');
})
close.click(function() {
    modal.css('display', 'none');
})
});