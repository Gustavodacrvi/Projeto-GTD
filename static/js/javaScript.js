function hide(el, time){
    el.css({
        'transition-duration': time,
        'visibility': 'hidden',
        'opacity': '0',
    })
}
function show(el, time){
    el.css({
        'transition-duration': time,
        'visibility': 'visible',
        'opacity': '1',
    })
}
function rotate(deg, time, el){
    el.css({
        'transition-duration': time,
        'transform': 'rotate(' + deg + 'deg)'
    })
}

function slideEffect(){
    show($('.slide--effect').css('top', '0'), '1.2s')
}
function dropdowns(){
    function abrirIcone(){
        show($('button > .fa-times'), '0.4s')
        hide($('button > .fa-bars'), '0.4s')
        rotate(0, '0.3s', $('button > .fa-times'))
        rotate(180, '0.3s', $('button > .fa-bars'))
    }
    function fecharIcone(){
        show($('button > .fa-bars'), '0.4s')
        hide($('button > .fa-times'), '0.4s')
        rotate(0, '0.3s', $('button > .fa-bars'))
        rotate(360, '0.3s', $('button > .fa-times'))
    }

    $('.dropdown').on('mouseenter', function(){
        show($(this).children('div'), 300)
    }).on('mouseleave', function(){
        hide($(this).children('div'), 300)
    })
    $('.dropdown__mobile').on('mouseenter', function(){
        show($(this).children('div'), '0.3s')
        abrirIcone()
    }).on('mouseleave', function(){
        hide($(this).children('div'), '0.3s')
        fecharIcone()
    })
    $('.subdropdown__mobile').on('click', function(){
        if ($(this).data('clicked') == 0 || $(this).data('clicked') == undefined) {
            show($(this).children('div'), 300)
            $(this).data('clicked', 1)
        } else {
            hide($(this).children('div'), 300)
            $(this).data('clicked', 0)
        }
    })
}


let formEyes = {
    opened: false,
    toggleEyes: function(time){
        if (!this.opened){
            show($('.fa-eye'), time)
            hide($('.fa-eye-slash'), time)
            $('.passwordEye > input').attr('type', 'text')
        } else {
            show($('.fa-eye-slash'), time)
            hide($('.fa-eye'), time)
            $('.passwordEye > input').attr('type', 'password')
        }
        this.opened = !this.opened
    }
}

let menu = {
    minDesktopWidth: 979,
    isDesktop: function() {return $(window).width() >= this.minDesktopWidth}
}



slideEffect()
dropdowns()

