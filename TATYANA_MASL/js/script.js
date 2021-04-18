const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
      overlay = document.querySelector('.menu__overlay');
      menuLink = document.querySelectorAll('.menu__link');
            
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        menu.classList.remove('active');
    }
});
 
overlay.addEventListener('click', (e) => {
    if (e.target == overlay) {
        menu.classList.remove('active');
    }
});

menuLink.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    })
});




$(document).ready(function(){
    $('ul.portfolio__tabs').on('click', 'li:not(.portfolio__tab_active)', function() {
        $(this)
          .addClass('portfolio__tab_active').siblings().removeClass('portfolio__tab_active')
          .closest('div.container').find('div.portfolio__content').removeClass('portfolio__content_active').eq($(this).index()).addClass('portfolio__content_active');
    });

    var tabIndex = window.location.hash.replace('#tab','')-1;
    if (tabIndex != -1) $('ul.portfolio__tabs li').eq(tabIndex).click();

    $('a[href*="#tab"]').click(function() {
        var tabIndex = $(this).attr('href').replace(/(.*)#tab/, '')-1;
        $('ul.portfolio__tabs li').eq(tabIndex).click();
    });    
});

const classActive = document.querySelector('#tab1');
    function activeTab() {
        classActive.classList.add('portfolio__content_active');
    }
    activeTab();