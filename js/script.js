var header = document.querySelector('header');
var scroll_top_button = document.getElementById('scroll-top');
var mobToggle = $('#mob-nav');
var mob_menu_sec = $('#offcanvas');
var close_offcanvas = $('#offcanvas-close-button');
var mob_menu_li = $('#offcanvas .bott ul li');

window.onscroll = ()=>{
 this.scrollY > 20 ? header.classList.add('bg-danger') : header.classList.remove('bg-danger');
}

$(document).ready(() => {
 var mixer = mixitup('.portfolio-cont .row');
});

$(document).ready(() => {
 $('#menu-top').onePageNav({
     currentClass: 'active',
     scrollSpeed: 0,
 });
});

close_offcanvas.css('cursor','pointer');

mobToggle.click(() =>{
    mob_menu_sec.fadeIn(300);
    $('body').addClass('overflow-hidden');
});
close_offcanvas.click(() => {
    mob_menu_sec.fadeOut(300);
    $('body').removeClass('overflow-hidden');
});
mob_menu_li.click(() => {
    mob_menu_sec.fadeOut(300);
    $('body').removeClass('overflow-hidden');
});

var scroll_top = () =>{
    if($(window).scrollTop()>160){
        $('.scroll-to-top').fadeIn(550);
        $('.scroll-to-top').click(() => {
            $(window).scrollTop('0');
        });
    }
    else{
        $('.scroll-to-top').fadeOut(550);
    }
};
setInterval(scroll_top,1);