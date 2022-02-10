// ============================= MEnu Show Hidden

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


// Menu Show
// validate if constant exists

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Menu Hidden
// validate if constant exists  

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// =========================== remove menu mobile //

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link , we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// ============================ Accordeon Skills //

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


// ==================== qualification TABS //

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })

        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')
    })
})


// ======================= Services modal //

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalclick) {
    modalViews[modalclick].classList.add('active-modal')
}


modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})


// ==================================== portfolio Swiper 1 // Swiperjs.com :: m'lay be less bain an
// tsy maintsy swiper ny anaran'ilay classe satria tsy mahazo ny style avy any
// amle swiper-bundle.min.css

const swiperPortfolio = new Swiper('.swp1', {
    // cssMode: true,
    loop:true,
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar:{
        el:'.swiper-scrollbar',
    },
});


// ===================================== Testimonial Swiper 2

const swipertestimonial = new Swiper('.swp2', {
    // cssMode: true,
    loop:true,
    grabCursor:true,
    spaceBetween:48,
    pagination: {
        el: '.swiper-pagination',
        clickable:true, 
        // afaka clikena ilay bullets
        dynamicBullets:true,
        // misy effets mikisaka ilay bullltes
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        568:{
            slidePerView:2,
        }
    }

});