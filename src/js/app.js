import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


import Modal from './modal';
// import cookieModal from './cookieModal';




let navList = document.querySelector('.wrap-mob-menu');
let subMenu = document.querySelector('.nav-items');
let navLinks = document.querySelector('.nav-links');
// let subMenuDinamic = document.querySelector('.submenu-dinamic-mob')
let subMenuDinamicWrap = document.querySelector('.submenu-dinamic');
let buttonBack = document.querySelector('.backButton');
// var navActiveMob
let navActive = document.querySelector('.nav-active');
const windowSize = document.querySelector('.bodyClass');

function reportWindowSize() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
        subMenu.classList.remove('menu-show');
        navLinks.classList.remove('menu-show');
        if (buttonBack) {buttonBack.classList.remove('displayActive')}
        if (navActive) { navActive.classList.remove('nav-active-mob')}
        
        if (subMenuDinamicWrap) { subMenuDinamicWrap.classList.remove('submenu-dinamic-mob')}
        // subMenu.classList.remove('menu-show')
        navList.classList.remove('active');

        console.log('resize');
    }
}




window.onresize = reportWindowSize;

// console.log(windowSize);

navList.addEventListener('click', () => {
    if (navList.classList.contains('active')){
    }else{
        if (subMenuDinamicWrap) { subMenuDinamicWrap.classList.add('submenu-dinamic-mob');}
        if (buttonBack) { buttonBack.classList.add('displayActive');}
        
    }
    subMenu.classList.toggle('menu-show');
    navLinks.classList.toggle('menu-show');
    navList.classList.toggle('active');

    if (navActive) { navActive.classList.toggle('nav-active-mob')}
    // navActiveMob = document.querySelector('.nav-active-mob')
    // console.log(navActiveMob);
    
})

if (buttonBack) {
    buttonBack.addEventListener('click', () => {
        buttonBack.classList.remove('displayActive');
        subMenuDinamicWrap.classList.remove('submenu-dinamic-mob');
    })
}




if (navActive) {
    navActive.addEventListener('click', ()=>{
        subMenuDinamicWrap.classList.add('submenu-dinamic-mob');
        buttonBack.classList.add('displayActive');
    })
}



//Страница документы. Оранжевая плашка
let docButton = document.querySelector('.documents-button-nav');
let docSideMenu = document.querySelector('.page-documents__nav');

if (docButton) {
    docButton.addEventListener('click', ()=>{
        docSideMenu.classList.toggle('doc-menu-show');
        docButton.classList.toggle('doc-button-up')   ; 
    })
}
//Страница документы. Оранжевая плашка ..... Конец




$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        nav: false,
        loop: true,
        dots: true,
        dotsContainer: '.pagination',
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });

   
    $('.owl-carousel').find(".owl-prev1").on('click', function () {
        $('.owl-carousel').trigger("next.owl.carousel");
        console.log('prev');
    });
    $('.mainPaginator').find(".owl-next2").on('click', function () {
        console.log('next');
        $('.owl-carousel').trigger("prev.owl.carousel");
    });
});

$('.pagination-link').click(function () {
    $('.owl-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
    console.log($(this).index());
    
})



// svg color

$('img.imgArrow').each(function () {
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
        var $svg = $(data).find('svg');
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
    }, 'xml');
});

$('img.imgArrow1').each(function () {
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
        var $svg = $(data).find('svg');
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
    }, 'xml');
});