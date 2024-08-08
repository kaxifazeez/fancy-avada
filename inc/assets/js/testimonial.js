jQuery(document).ready(function($) {
    function initializeOwlCarousel() {
        $('.owl-carousel').owlCarousel({
            loop: false,
            margin: 0,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }
    initializeOwlCarousel();
    $(document).on('fusion-element-render-fea-testimonials', function(event) {
        initializeOwlCarousel();
    });
});
