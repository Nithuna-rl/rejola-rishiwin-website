(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });     

    $(document).ready(function() {
        const images = [
            'img/projects/1.jpg',
            'img/projects/2.jpg',
            'img/projects/3.jpg',
            'img/projects/4.jpg',
            'img/projects/5.jpg',
            'img/projects/6.jpg',
            'img/projects/7.jpg',
            'img/projects/8.jpg',
            'img/projects/9.jpg',
            'img/projects/10.jpg',
            'img/projects/11.jpg',
            'img/projects/12.jpg',
            'img/projects/13.jpg',
            'img/projects/14.jpg',
            'img/projects/15.jpg',
            'img/projects/16.jpg',
            'img/projects/17.jpg',
            'img/projects/18.jpg',
            'img/projects/19.jpg',
            'img/projects/20.jpg',
            'img/projects/21.jpg',
            'img/projects/22.jpg',
            'img/projects/23.jpg',
            'img/projects/24.jpg',
        ];
        const gallery = document.querySelector('.gallery');
        
        images.forEach(imageSrc => {
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('gallery-image', 'col-lg-4', 'col-md-6');
            
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = '';
            
            imgDiv.appendChild(img);
            gallery.appendChild(imgDiv);
        });
  
    });
    
})(jQuery);

