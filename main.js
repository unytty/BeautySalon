const navItems = document.querySelector('#nav__items');
const openNavBtn = document.querySelector('#open_nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

openNavBtn.addEventListener('click',() => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
});

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none'
};

closeNavBtn.addEventListener('click', closeNav);

//close nav menu when a menu item is clicked
if(window.innerWidth < 1024) {
    document.querySelectorAll('#nav__items li a').forEach(navItem => {      
        navItem.addEventListener('click', () => {
            closeNav();
        });

    });
};


//change background color on navBar after scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});




    $('.sec3-slider').slick({
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 660,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
                  

//rolly js
const r = rolly({
    view: document.querySelector('.app'),
    native: true,
    // other options
  });
  r.init();


//INITIALIZE AOS
AOS.init({
    duration:1500,
});