

$(function() {

    var sibl = $('.home-row').siblings();
    var total = 0;
    sibl.each(function(){
        total += $(this).outerHeight();
    })
    total = total + 24
    $('.home-row').css( { height: 'calc(100% - ' + total + 'px)' } );

    var sibl = $('.home-cards').siblings();
    var total = 0;
    sibl.each(function(){
        total += $(this).outerHeight();
    })
    total = total + 24
    $('.home-cards').css( { height: 'calc(100% - ' + total + 'px)' } );

    // var sibl = $('.home-sidebar__box').siblings();
    // var total = 0;
    // sibl.each(function(){
    //     total += $(this).outerHeight();
    // })
    // // total = total + 24
    // $('.home-sidebar__box:last').css( { height: 'calc(100% - ' + total + 'px)' } );

    // DATEPICKER

    new AirDatepicker('.js-date', {
        range: true,
        multipleDatesSeparator: ' - ',
        autoClose: true
    });

    // CLIPBOARD

    var clipboard = new ClipboardJS('.js-copy');

    clipboard.on('error', function(e) {
        $('.add .tooltip').addClass('tooltip--red')
        $('.add .tooltip').text('Заполните поле')
        e.clearSelection();
    });

    clipboard.on('success', function(e) {
        $('.add .tooltip').removeClass('tooltip--red')
        $('.add .tooltip').text('Скопировано')
        e.clearSelection();
    });

    // COMMENT ICON

    $('.comment-icons__item').click(function() {
        $('.comment-icons__item.active').removeClass('active')
        $(this).addClass('active')
    })

    // SHOW BLOCK NEXT

    $('.js-show-next').click(function() {
        $(this).next().toggle()
    })

    $('.games-item').click(function() {
        $('.games-item.active').removeClass('active')
        $(this).toggleClass('active')
    })

    // ACTIVE ICON

    $('.home-card__alert svg').click(function() {
        $(this).parent().remove()
    })

    $('.home-card__fav, .button-heart, .home-filter__reset--save svg').click(function() {
        $(this).toggleClass('active')
    })

    // lang currency dropdown

    $('.drop-toggler').click(function() {
        $(this).next().toggleClass('active')
        $(this).toggleClass('active')
    })

    $('.lang-body__item').click(function() {
        var src = $(this).find('img').attr('src');
        $('.lang-toggler img').attr('src', src);
        $('.lang-body__item').removeClass('active')
        $(this).addClass('active')
        $('.lang-body').removeClass('active')
        $('.lang-toggler').removeClass('active')
    })

    $('.currency-body__item').click(function() {
        var text = $(this).text()
        $('.currency-toggler').text(text);
        $('.currency-body__item').removeClass('active')
        $(this).addClass('active')
        $('.currency-body').removeClass('active')
        $('.currency-toggler').removeClass('active')
    })

    // TOOLTIOP


    $('.js-copy').click(function() {
        $(this).find('.tooltip').addClass('active')
        setTimeout(function() {
            $('.tooltip').removeClass('active')
        }, 600);
    })

    $('.tooltip-click').click(function() {
        $(this).find('.tooltip').toggleClass('active')
    })

    // CUSTOM SCROLL


    $(".home-filter .js-scroll").mCustomScrollbar({
        axis: "y",
        mouseWheelPixels: 200,
        // callbacks:{
        //     onScrollStart:function(){
        //       $('.js-srch, .js-small').select2('close');
        //     }
        // }
    });

    if($('.form').hasClass('disabled')) {
     $(".home-filter .js-scroll").mCustomScrollbar('destroy');
}




    if ($(window).width() < 767) {
        // $(".message .chat-body").mCustomScrollbar({
        //     axis: "y",
        //     mouseWheelPixels: 200,
        // });
        $('.home-cards').mCustomScrollbar('destroy');
    }


    $(window).resize(function() {
        if ($(window).width() < 767) {
            // $(".message .chat-body").mCustomScrollbar({
            //     axis: "y",
            //     mouseWheelPixels: 200,
            // });
        }
    });

    // CUSTOM SELECT

    // $(".js-small").select2();
    // $(".js-select").select2();
    // $(".js-srch").select2({
    //     multiple: true,
    //     placeholder: "select",
    //     "language": {
    //         "noResults": function() {
    //             return "Результаты не найдены";
    //         }
    //     },
    //     searching: function() {
    //         return "Something else...";
    //     },
    //     escapeMarkup: function(markup) {
    //         return markup;
    //     }
    // });

    // $('.select2-search__field').css('width', '100%');

    // $(".select-img").select2({
    //     templateResult: formatState,
    //     templateSelection: formatState,
    // });

    // $(".js-srch").on('select2:open', function(e) {
    //     $('.select2-container.select2-container--default.select2-container--open').addClass('srch')
    // });

    // $(".js-small").on('select2:open', function(e) {
    //     $('.select2-container.select2-container--default.select2-container--open').addClass('small')
    // });

    // $(".select-img").on('select2:open', function(e) {
    //     $('.select2-container.select2-container--default.select2-container--open').addClass('open')
    // });

    // function formatState(opt) {
    //     if (!opt.id) {
    //         return opt.text.toUpperCase();
    //     }

    //     var optimage = $(opt.element).attr('data-image');
    //     console.log(optimage)
    //     if (!optimage) {
    //         return opt.text.toUpperCase();
    //     } else {
    //         var $opt = $(
    //             '<span><span><img src="' + optimage + '" width="24px" /> </span>' + '<span>' + opt.text + '</span>' + '</span>'
    //         );
    //         return $opt;
    //     }
    // };

    // CLEAR INPUT

    // ADAPTIVE MENU

    $('.notify-item__close').click(function() {
        $(this).closest('.notify-item').remove()
    });

    $('.catalog-filter__toggler').click(function() {
        $(this).next().toggleClass('active')
        $('.catalog-header .form input').toggleClass('active')
    });

    $('.home-sidebar-toggler').click(function() {
        $(this).next().slideToggle()
        $(this).toggleClass('active')
        if ($(this).hasClass('active')) {
            $(this).find('span').text('Закрыть фильтр')
        } else {
            $(this).find('span').text('Открыть фильтр')
        }
    });

    $('.search-toggler').click(function() {
        $(this).toggleClass('active')
        $(this).next().toggleClass('active')
    });

    $('.clear-input').click(function() {
        $(this).closest('.form__row').find('input').val("")
    });

    // ADAPTIVE MENU

    $('.header .hamburger').click(function() {
        $(this).toggleClass('is-active');
        $('.sidebar').toggleClass('open');
        $('body').toggleClass('hidden');
        $('.overlay').toggleClass('open');
    });

    $('.sidebar .hamburger').click(function() {
        $('body').toggleClass('sidebar-overlay')
        $(this).toggleClass('is-active');
        $('.sidebar').toggleClass('showed');
    });

    $(document).on('click', function(e) {
        var container = $(".sidebar, .hamburger");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('open')
            $('.hamburger').removeClass('is-active')
            $('.sidebar').removeClass('showed')
            $('body').removeClass('sidebar-overlay')
            $('body').removeClass('hidden')
            $('.overlay').removeClass('open')
        }
    });

    $(document).on('click', function(e) {
        const
            $toggler = $(e.target).closest('.js-chat'),
            $block = $(e.target).closest('.js-chat').find('.chat, .log-menu');

        if ($toggler.length) {
            $block.toggleClass('open');
            // $block2.toggleClass('active')
        }

        $('.chat, .log-menu').not($block).removeClass('open');

    });



    // SCROLL TO ANY SECTION

    $('.scroll[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // TABS JQUERY 

    $(".tabs-content__item").not(":first").hide();
    $(".tabs-nav__item").click(function() {
        $(".tabs-nav__item").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs-content__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    // MODAL MAGNIFIC POPUP INIT

    $('.modal-init').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true
    });


    $('.modal-close, .close-mod').on("click", function() {
        $.magnificPopup.close();
    });

    // SLICK SLIDER INIT


});