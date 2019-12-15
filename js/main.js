jQuery(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var heightHeader = document.getElementById('masthead');
    var topArrow = document.getElementById('top')
    if (document.body.scrollTop > heightHeader.offsetHeight || document.documentElement.scrollTop > heightHeader.offsetHeight) {
        topArrow.classList.remove('d-none');
    } else {
        topArrow.classList.add('d-none');
    }
});

window.addEventListener('load', function () {
    jQuery('#link-footer').click(function (event)
    {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 2000);
    });
    jQuery('#top').click(function (event)
    {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: $("#masthead").offset().top
        }, 2000);
    });
}, false);

window.onscroll = function() {topScroll()};

function topScroll() {
    var heightHeader = document.getElementById('masthead');
    var topArrow = document.getElementById('top');
    var bar_menu = document.querySelector('.navigation-top');
    
    if (document.body.scrollTop > heightHeader.offsetHeight || document.documentElement.scrollTop > heightHeader.offsetHeight) {
        topArrow.classList.remove('d-none');
    } else {
        topArrow.classList.add('d-none');
    }

    if (document.body.scrollTop > (heightHeader.offsetHeight - bar_menu.offsetHeight) || document.documentElement.scrollTop > (heightHeader.offsetHeight  - bar_menu.offsetHeight)) {
        bar_menu.classList.add('fixed-menu');
    } else {
        bar_menu.classList.remove('fixed-menu');
    }
}