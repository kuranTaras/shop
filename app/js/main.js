$(window).on("load" , function () {
// banner slider
    $(".banner__slides").owlCarousel({
        items: 1,
        dots: true,
        margin: 0,
        loop: true,
        autoplay: false,
        nav: false,
    });
// header burger
    const burger = $('.header__burger')
    const headerMenu = $('.header__links')
    const headerMenuHeight = document.querySelector('.header__links').scrollHeight + 10 + 'px'
    burger.on('click', () => {
        headerMenu.toggleClass('header__menu_active')
        if (headerMenu.hasClass('header__menu_active')) {
            headerMenu.css({'max-height':headerMenuHeight})
        } else {
            headerMenu.css({'max-height':'0px'})
        }
    })
// products slider 1
    if ($(window).width() < 600) {
        $(".products__favourites").owlCarousel({
            items: 1.5,
            loop: true,
            margin: 20,
            autoplay: false,
            nav: false,
        });
    }
// products slider 2
    if ($(window).width() < 600) {
        $(".products__news-all").owlCarousel({
            items: 1.3,
            loop: true,
            margin: 11,
            autoplay: false,
            nav: false,
        });
    }
// shop script
    const shopButton = $('.products__add')
    const shopProduct = $('.products__product')
    const shopBasketPrice = $('.header__all-price')
    let allPrice = 0
    shopButton.each(function (index) {
        $(this).on('click', () => {
            $(this).toggleClass('products__add_added')
            if ($(this).hasClass('products__add_added')) {
                $(this).text('Product added')
                allPrice += parseFloat(shopProduct.eq(index).attr('data-price'))
            } else {
                $(this).text('Ver producto')
                allPrice -= parseFloat(shopProduct.eq(index).attr('data-price'))
            }
            $('.header__product-counter').text($('.products__add_added').length)
            shopBasketPrice.text(allPrice)
        })
    })
})



