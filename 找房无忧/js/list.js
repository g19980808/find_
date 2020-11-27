var middle=document.getElementsByClassName('middle')[0];
middle.onclick=function(){
    window.open('./my.html')
}

/* ------切换-------------------------------- */

$('.category>li').on('click',function(){
    $(".category>li").find('.box1').css('display','none');
    $(this).find('.box1').css('display','block');
    $(this).css('color','#ff8a00');
    $(this).siblings().css('color','#000');
    $('.wrap>.mantle').css('display','block');
    $(this).find('.h-down').removeClass('h-down').addClass('y-up'); 
    $(this).siblings().find('.y-up').removeClass('y-up').addClass('h-down');
})
/* ----------------------------------------- */


    $(".mantle").on('touchstart',function(){
        $(this).siblings().find('.box1').css('display','none');
        $(this).css('display','none');
        $(this).siblings().find('li').css('color','#000');
        $(this).siblings().find('.y-up').removeClass('y-up').addClass('h-down');
    })


 
 $('.house li:last').on('touchstart',function(){
    $(this).parents('.box1').hide();
    $(this).parents('.category').siblings('.mantle').css('display','none')
    $(this).parents('li').css('color','#000');
    $(this).parents('li').find('.y-up').removeClass('y-up').addClass('h-down');
}) 
 $('.confirm').on('touchstart',function(){
    $(this).parents('.box1').hide();
    $(this).parents('.category').siblings('.mantle').css('display','none')
    $(this).parents('li').css('color','#000');
    $(this).parents('li').find('.y-up').removeClass('y-up').addClass('h-down');
}) 
// 4. 隐藏
/*  $('.more li').on('touchstart',function(){
    $(this).parents('.box1').hide();

})  */


$('.more').find('li').on('click',function(){
    $(this).toggleClass('bgg')
})
