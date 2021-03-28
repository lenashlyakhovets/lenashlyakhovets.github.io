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

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

menuLink.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    })
});