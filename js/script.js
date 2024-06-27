document.addEventListener('DOMContentLoaded', function () {
    let splide1;

    if (document.querySelector(".client-slide")) {
        splide1 = new Splide('.client-slide', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: 30,
            pagination: false,
            arrows: {
                prev: '<span class="custom-arrow prev"><i class="fas fa-arrow-left"></i></span>',
                next: '<span class="custom-arrow next"><i class="fas fa-arrow-right"></i></span>',
            },
            breakpoints: {
                1025: {
                    arrows: false,
                    pagination: true,
                    perPage: 2,
                },
                768: {
                    perPage: 1,
                }
            }
        });
        splide1.mount();
    }

    if (document.querySelector(".icon-slider")) {
        new Splide('.splide', {
            type: 'loop',
            drag: 'free',
            focus: 'center',
            arrows: false,
            perPage: 6,
            pagination: false,
            autoScroll: {
                speed: 1,
            },
            breakpoints: {
                // 1025: {
                //     arrows: false,
                //     pagination: true,
                //     perPage: 2,
                // },
                768: {
                    perPage: 3,
                    autoScroll: {
                        speed: 0.5,
                    },
                },
                575:{
                    perPage: 2,
                }
            }
        }).mount(window.splide.Extensions);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var currentPage = window.location.pathname.split("/").pop().split(".")[0];

    document.body.classList.add(currentPage);

    var navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(function (link) {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });
    
});


jQuery(function ($) {

    $(document).ready(function () {
        const awardPoint = $('.award-point');
        // const selectedSection = $('.selected-section');
        if(awardPoint.length){
            function applyScrollAnimation(element, factor) {

                $(window).scroll(function () {
                    const scrollY = $(this).scrollTop();
                    const startScrollY = awardPoint.offset().top - window.innerHeight;
                    const endScrollY = awardPoint.offset().top + awardPoint.height();
                
                    if (scrollY >= startScrollY && scrollY <= endScrollY) {
                        const scrollX = (scrollY - startScrollY) * factor;
                        element.css('transform', `translateY(${scrollX}px)`);
                    } else if (scrollY < startScrollY) {
                        element.css('transform', `translateY(0px)`);
                    }
                });
            }
            const textElement3 = $('.scrollable-column-third');
            applyScrollAnimation(textElement3, 0.1);
        
            const textElement1 = $('.scrollable-column-first');
            applyScrollAnimation(textElement1, 0.1);
        
            const textElement2 = $('.scrollable-column-second');
            applyScrollAnimation(textElement2, 0.2);  
        }

        // const awardPoint = $('.award-point');

        //     if (awardPoint.length) {
        //         function applyScrollAnimation(element, factor, responsiveFactor) {
        //             const updateScrollAnimation = () => {
        //                 const scrollY = $(window).scrollTop();
        //                 const startScrollY = awardPoint.offset().top - window.innerHeight;
        //                 const endScrollY = awardPoint.offset().top + awardPoint.height();

        //                 if (scrollY >= startScrollY && scrollY <= endScrollY) {
        //                     const scrollX = (scrollY - startScrollY) * (responsiveFactor || factor);
        //                     element.css('transform', `translateY(${scrollX}px)`);
        //                 } else if (scrollY < startScrollY) {
        //                     element.css('transform', 'translateY(0px)');
        //                 }
        //             };

        //             // Initial setup
        //             updateScrollAnimation();

        //             // Update on scroll
        //             $(window).scroll(updateScrollAnimation);

        //             // Update on resize
        //             $(window).resize(updateScrollAnimation);
        //         }

        //         const textElement3 = $('.scrollable-column-third');
        //         applyScrollAnimation(textElement3, 0.05, 0.1); // Adjust the responsive factor as needed

        //         const textElement1 = $('.scrollable-column-first');
        //         applyScrollAnimation(textElement1, 0.05, 0.1); // Adjust the responsive factor as needed

        //         const textElement2 = $('.scrollable-column-second');
        //         applyScrollAnimation(textElement2, 0.06, 0.2); // Adjust the responsive factor as needed
        //     }


        // if(selectedSection.length){
        //     function applyScrollAnimation(element, factor) {

        //         $(window).scroll(function () {
        //             const scrollY1 = $(this).scrollTop();
        //             const startScrollY1 = selectedSection.offset().top - window.innerHeight;
        //             const endScrollY1 = selectedSection.offset().top + selectedSection.height();
                
        //             if (scrollY1 >= startScrollY1 && scrollY1 <= endScrollY1) {
        //                 const scrollX1 = (scrollY1 - startScrollY1) * factor;
        //                 element.css('transform', `translateY(${scrollX1}px)`);
        //             } else if (scrollY1 < startScrollY1) {
        //                 element.css('transform', `translateY(0px)`);
        //             }
        //         });
        //     }
        //     const textElement4 = $('.selected-parallax-1');
        //     applyScrollAnimation(textElement4, 0.1);
        
        //     const textElement5 = $('.selected-parallax-2');
        //     applyScrollAnimation(textElement5, 0.1);
        
        //     const textElement6 = $('.selected-parallax-3');
        //     applyScrollAnimation(textElement6, 0.1);  
        // }
    
        
    });
    
    

    // bottom-to-top
    var btn = $('#button');

    if (btn.length) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });

        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, '300');
        });
    }

    var hamburger = $('.hamburger');
    var navMenu = $('.nav-menu');

    if (hamburger.length && navMenu.length) {
        hamburger.click(function () {
            navMenu.toggleClass('active');
            hamburger.toggleClass('active');
        });

        navMenu.click(function () {
            navMenu.addClass('active');
        });
    }

    // sticky
    $(document).ready(function () {
        var header = $('.header');
    
        if (header.length) {
            if ($(window).scrollTop() > 100) {
                header.addClass("sticky");
            }
    
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    header.addClass("sticky");
                } else {
                    header.removeClass("sticky");
                }
            });
        }
    });
    

    // Parallax Effect
    $(window).scroll(function () {
        let offset = $(window).scrollTop();
        $(".parallax").css('background-position-y', -offset * 0.1 + 'px');
    });

    $(document).ready(function () {
        var aboutLines = $('.about-line');

        $(window).scroll(function () {
            aboutLines.each(function () {
                var aboutLine = $(this);
                var section = aboutLine.closest('li');

                if (section.offset().top <= $(window).scrollTop() + $(window).height()) {
                    aboutLine.width('100%');
                } else {
                    aboutLine.width('0%');
                }
            });
        });

        // Initial check on page load
        $(window).scroll();
    });
    $(document).ready(function() {
        const example = $('.blog-image');
        const mouseOverElement = $('.view-btn');

        example.on('mousemove', function(e) {
            const x = e.pageX - $(this).offset().left - example.width() / 2;
            const y = e.pageY - $(this).offset().top - example.height() / 2;

            // Calculate transformed coordinates
            var xc = x / 3;
            var yc = y / 3;

            // Apply the transformation
            mouseOverElement.css('transform', 'translate(' + xc + 'px, ' + yc + 'px)');
        });

        example.on('mouseleave', function() {
            mouseOverElement.css('transform', 'translate(50%, -50%)');
        });
    });

    

    $(document).ready(function() {
        const serviceBg = $('.service-bg');
        if(serviceBg.length){
            $(window).scroll(function() {
                var scrollPosWin = $(window).scrollTop();
                var factorBackground = scrollPosWin * .4;
                var factorForeground = scrollPosWin * 0.15;
                $('.service-bg').css({'top': factorBackground, 'bottom': -factorBackground});
                $('.service-bg').css({'top': factorForeground, 'bottom': -factorForeground});
      
              });
        }

        // if(scrollTo.length){
        //     $('.scrollTo').click(function(){
        //         $('html, body').animate({
        //             scrollTop: $( $(this).attr('href') ).offset().top
        //         }, 1000);
        //         return false;
        //     });
        // }

        const selectedSection = $('.selected-section');
        if(selectedSection.length){
            function applyScrollAnimation(element, factor) {

                $(window).scroll(function () {
                    const scrollY = $(this).scrollTop();
                    const startScrollY = selectedSection.offset().top - window.innerHeight;
                    const endScrollY = selectedSection.offset().top + selectedSection.height();
            
                    if (scrollY >= startScrollY && scrollY <= endScrollY) {
                        const factorBackground = (scrollY - startScrollY) * 0.1;
                        const factorForeground = (scrollY - startScrollY) * 0.1;
            
                        $('.selected-parallax').css({
                            'top': factorBackground,
                            'bottom': -factorBackground
                        });
            
                        $('.selected-parallax').css({
                            'top': factorForeground,
                            'bottom': -factorForeground
                        });
            
                        // const scrollX = (scrollY - startScrollY) * factor;
                        // element.css('transform', `translateY(${scrollX}px)`);
                    } else if (scrollY < startScrollY) {
                        element.css('transform', 'translateY(0px)');
                        $('.selected-parallax').css({
                            'top': 0,
                            'bottom': 0
                        });
                    }
                });
            }
            const textElement4 = $('.selected-parallax-1');
            applyScrollAnimation(textElement4, 0.09);
        
            const textElement5 = $('.selected-parallax-2');
            applyScrollAnimation(textElement5, 0.09);
        
            const textElement6 = $('.selected-parallax-3');
            applyScrollAnimation(textElement6, 0.09);   
        }
    });

});
new WOW().init();

