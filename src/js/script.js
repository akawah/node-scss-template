jQuery(document).ready(function ($) {

    // top phone
    let topPhone = document.querySelector('.topPhone');
    let topPhoneWrap = topPhone.querySelector('.topPhone__wrap');
    let topPhoneNumber = topPhoneWrap.querySelector('.topPhone__number');
    let topPhoneWork = topPhoneWrap.querySelector('.topPhone__work');
    let topPhoneBtn = topPhone.querySelector('.topPhone__btn');
    
    topPhoneBtn.addEventListener('click', function(){
        if(topPhoneWrap.classList.contains('topPhone__wrap-visible')) {
            topPhoneNumber.style.transition = 'opacity 0.1s';
            topPhoneWork.style.transition = 'opacity 0.1s';
            topPhoneWrap.classList.remove('topPhone__wrap-visible');
            topPhoneNumber.classList.remove('topPhone__number-visible');
            topPhoneWork.classList.remove('topPhone__work-visible');
        } else {
            topPhoneNumber.style.transition = 'opacity 0.3s 0.2s';
            topPhoneWork.style.transition = 'opacity 0.3s 0.4s';
            topPhoneWrap.classList.add('topPhone__wrap-visible');
            topPhoneNumber.classList.add('topPhone__number-visible');
            topPhoneWork.classList.add('topPhone__work-visible');
        }
    });
/*    topPhoneWrap.addEventListener('click', function(){
        topPhoneNumber.style.transition = 'opacity 0.1s';
        topPhoneWork.style.transition = 'opacity 0.1s';
        topPhoneWrap.classList.remove('topPhone__wrap-visible');
        topPhoneNumber.classList.remove('topPhone__number-visible');
        topPhoneWork.classList.remove('topPhone__work-visible');
    });*/
    
/*
    
    
    $('.topPhone__wrap').on('click', function(e) {
        if($(this).hasClass('topPhone__wrap-visible')){
            // $(this).children('.topPhone__number').css('transition', 'opacity 0.2s');
            // $(this).children('.topPhone__work').css('transition', 'opacity 0.2s');
            $(this).removeClass('topPhone__wrap-visible');
            // $(this).children('.topPhone__number').removeClass('topPhone__number-visible');
            // $(this).children('.topPhone__work').removeClass('topPhone__work-visible');
        } else {
            
            // $(this).children('.topPhone__number').css('transition', 'opacity 0.3s 0.4s');
            // $(this).children('.topPhone__work').css('transition', 'opacity 0.3s 0.6s');
            $(this).addClass('topPhone__wrap-visible');
            // $(this).children('.topPhone__number').addClass('topPhone__number-visible');
            // $(this).children('.topPhone__work').addClass('topPhone__work-visible');
        }
    });
*/

    //
    /*$('#dm').on('mousedown touchstart', function() {
        $('#dm').removeClass('start');
        $('#dm').addClass('next');
        $('#o').css('opacity', '1');
        $('#oj').css('opacity', '1');
        setTimeout(function () {
            $('#dm').removeClass('next');
            $('#dm').addClass('start');
            $('#oj').css('opacity', '0');
            $('#o').css('opacity', '0');
        }, 300);
    });*/
    /*$('#dm').mousedown(function(e) {
        $('#dm').removeClass('start');
        $('#dm').addClass('next');
        $('#o').css('opacity', '1');
        $('#oj').css('opacity', '1');
        setTimeout(function () {
            $('#dm').removeClass('next');
            $('#dm').addClass('start');
            $('#oj').css('opacity', '0');
            $('#o').css('opacity', '0');
        }, 300);
    });*/

    // ленивая подгрузка картинок
    [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function() {
            img.removeAttribute('data-src');
        };
    });

    // desktop
    // меню добавить
    $('.menu .wrapper ul.main_menu li.add a.main_add_btn').mouseenter(function(e) {
        $('.menu .wrapper ul.main_menu li.add ul#add_menu').slideDown(200);
    });
    $('.menu .wrapper ul.main_menu ul.add_menu').mouseleave(function(e) {
        $(this).slideUp(200);
    });

    // mobile
    // гамбургер
    $('.top .wrapper #menu_btn').click(function(e) {
        let shown = $('.menu .wrapper ul.show').first();
        if(shown.length == 1){
            shown.removeClass('show');
            setTimeout(function () { shown.removeClass('block'); }, 400);
            $(this).removeClass('close');
            $(this).addClass('gamb');
        } else{
            let mob_menu = $('.menu .wrapper ul#mob_menu');
            mob_menu.addClass('block');
            setTimeout(function () { mob_menu.addClass('show'); }, 20);
            $('.top .wrapper #menu_btn').removeClass('gamb');
            $('.top .wrapper #menu_btn').addClass('close');
            if(!$('div').is('.back_btn')){
                $('.menu .wrapper ul.cats').prepend('<div class="back_btn"></div>');
                $('.menu .wrapper ul.subcats').prepend('<div class="back_btn"></div>');
            }
        }
    });
    // back стрелка
    $('.menu .wrapper ul#cats').on('click', '.back_btn', function(){
        let cats = $('.menu .wrapper ul#cats');
        let mob_menu = $('.menu .wrapper ul#mob_menu');
        mob_menu.addClass('block');
        setTimeout(function () { mob_menu.addClass('show'); }, 20);
        cats.removeClass('show');
        setTimeout(function () { cats.removeClass('block'); }, 400);
    });
    $('.menu .wrapper ul.subcats').on('click', '.back_btn', function(){
        let cats = $('.menu .wrapper ul#cats');
        let subcats = $('.menu .wrapper ul.subcats');
        cats.addClass('block');
        setTimeout(function () { cats.addClass('show'); }, 20);
        subcats.removeClass('show');
        setTimeout(function () { subcats.removeClass('block'); }, 400);
    });
    // категории
    $('.menu .wrapper ul#mob_menu li#companies').click(function(e) {
        let cats = $('.menu .wrapper ul#cats');
        let mob_menu = $('.menu .wrapper ul#mob_menu');
        cats.addClass('block');
        setTimeout(function () { cats.addClass('show'); }, 20);
        mob_menu.removeClass('show');
        setTimeout(function () { mob_menu.removeClass('block'); }, 400);
    });
    // подкатегории
    $('.menu .wrapper ul#cats li').click(function(e) {
        let subcat = $('ul#' + $(this).attr('class'));
        let cats = $('.menu .wrapper ul#cats');
        subcat.addClass('block');
        setTimeout(function () { subcat.addClass('show'); }, 20);
        $('html, body').animate({scrollTop:0}, 'slow');
        cats.removeClass('show');
        setTimeout(function () { cats.removeClass('block'); }, 400);
    });
    // клик за пределами меню
    $(document).click( function(e){
        if($(e.target).closest('.menu .wrapper ul').length == 0 && $(e.target).closest('.top .wrapper #menu_btn').length == 0){
            let shown = $('.menu .wrapper ul.show').first();
            if(shown.length == 1){
                shown.removeClass('show');
                setTimeout(function () { shown.removeClass('block'); }, 400);
                $('.top .wrapper #menu_btn').removeClass('close');
                $('.top .wrapper #menu_btn').addClass('gamb');
            }
        }
    });
    // вход
    $('.menu .wrapper ul#mob_menu li#enter .mob_enter').click(function(e) {
        let mob_menu = $('.menu .wrapper ul#mob_menu');
        mob_menu.removeClass('show');
        setTimeout(function () { mob_menu.removeClass('block'); }, 400);
        $('.top .wrapper #menu_btn').removeClass('close');
        $('.top .wrapper #menu_btn').addClass('gamb');
    });
    // добавить...
    $('.menu .wrapper ul#mob_menu li#add').click(function(e) {
        $('.menu .wrapper ul#mob_menu  #add #add_menu').slideToggle();
    });

    // popups
    (function() {
        let popup_id;
        $('.show_popup').click(function(e) {
            popup_id = $('#' + $(this).attr('data-popup'));
            posElement($(popup_id));
            $(popup_id).fadeIn(200);
            $('#overlay').fadeIn(200);
            e.stopPropagation();
        });
        $('.exit, #overlay, .cancel_btn').click(function(e) {
            $(popup_id).fadeOut(300);
            $('#overlay').fadeOut(300);
            e.stopPropagation();
        });
        
        $(document).keydown(function (e) {
            if (e.which == 27) {
                $('.login_win').slideUp(300);
                $(popup_id).fadeOut(300);
                $('#overlay').fadeOut(300);
                e.stopPropagation();
            }
        });
        $(document).resize(function (e) {
            if(popup_id != '') {
                posElement($(popup_id));
            }
            footerToBottom();
        });
        function posElement(el) {
            let winHeight = $(self).height();
            let elHeight = $(popup_id).outerHeight();
            let winWidth = $(self).width();
            let elWidth = $(popup_id).outerWidth();
            if((winHeight - elHeight) > 6) {
                el.css('top', $(window).scrollTop() + winHeight/2 - elHeight/2 + 'px');
            } else {
                el.css('top', $(window).scrollTop() + 3 + 'px'); // пусть будет 3px от верха, если не влезает
            }
            el.css('left', winWidth/2 - elWidth/2 + 'px');
        }
    })();

    // кнопка наверх
    let gotop = $('#gotop');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $(gotop).addClass('visible');
        } else if($(this).scrollTop() <= 300){
            $(gotop).removeClass('visible');
        }
    });
    $(gotop).click(function() {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
/*    $(window).on('load resize', function(){
        let clWidth = document.body.clientWidth;
        let footer_top = $('.footer_top');
        if($(window).scrollTop() > $(window).height()/4) {
            $(footer_top).fadeIn(500);
        } else {
            $(footer_top).fadeOut(500);
        }
        if(clWidth <= 1440) {
            $(footer_top).css('right', '5px');
        } else if(clWidth > 1440 && clWidth <= 1630){
            $(footer_top).css('right', (clWidth - 1440)/2 + 5 + 'px');
        } else {
            $(footer_top).css('right', (clWidth - 1440)/2 - 80 - 5 + 'px');
        }
    });
    $(window).scroll(function(){
        let footer_top = $('.footer_top');
        if($(window).scrollTop() > $(window).height()/4) {
            $(footer_top).fadeIn(500);
        } else {
            $(footer_top).fadeOut(500);
        }
    });
    $('.footer_top').on('click', function(){
        $('html, body').animate({scrollTop:0},500);
    });*/

});