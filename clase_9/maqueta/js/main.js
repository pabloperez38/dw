$('.owl-carousel').owlCarousel({
    loop:true,
    center: true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:true,
            loop:true
        }
    }
})

//Plugin AOS
AOS.init();