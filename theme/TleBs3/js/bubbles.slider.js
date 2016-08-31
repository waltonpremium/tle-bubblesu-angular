
// main page sliders

function initSlider(element) {

  $(element).owlCarousel({
            "items": 4,
            "itemsDesktopSmall":[991,3],
            "itemsTablet": [670, 2],
            "itemsMobile": [410, 1],
            "itemWidth": 173,
            "lazyLoad": true,
            "navigation": true,
            "navigationText": false,
            "hideNavigation": false,
            "addClassActive": true,
            "pagination": false
    });
}

function initColorSliders(){
    $('#colorModalSlider').each(function (k, v) {
        $(v).owlCarousel({
            /*"items": 3,
            "itemsDesktop": [992, 3],
            "itemsTablet": [768, 2],
            "itemsMobile": [480, 1],*/
            "items": 1,
            "navigation": true,
            "lazyLoad": true,
            "navigationText": false,
            "responsive": false,
            "addClassActive": true,
            "pagination": false,
            afterMove: function () {
                //reset transform for all item
                /*
                $(v).find(".owl-item").css({
                    transform: "scale(.75,.75)",
                })
                //add transform for 2nd active slide
                $(v).find(".owl-item.active").eq(1).css({
                    transform: "none",
                    zIndex: 3000,
                })*/

            },
            //set init transform
            afterInit: function () {
                /*
                $(v).find(".owl-item.active").eq(1).css({
                    transform: "none",
                    zIndex: 3000,
                })*/
            }

        });
    });
}
