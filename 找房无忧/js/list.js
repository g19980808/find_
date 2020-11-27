var middle=document.getElementsByClassName('middle')[0];
middle.onclick=function(){
    window.open('./my.html')
}
//切换
$('.category>li').on('click',function(){
    $(".category>li").find('.box1').css('display','none');
    $(this).find('.box1').css('display','block');

})
// 1. 隐藏
/* $(".category>li").find('.box1').on('touchstart',function(){
    $(this).css('display','none');
}) */
// 2. 隐藏
 $(".price .box1").find('li').on('touchstart',function(){
    $(this).parents('.box1').css('display','none');
}) 

// 3. 隐藏
 $('.house li:last').on('touchstart',function(){
    $(this).parents('.box1').hide();

}) 
// 4. 隐藏
/*  $('.more li').on('touchstart',function(){
    $(this).parents('.box1').hide();

})  */



//切换
$('.category>li').on('click',function(){
    $(".category>li").find('.box1').css('display','none');
    $(this).find('.box1').css('display','block');
    $(this).find('.h-down').addClass('h-down');
    $(this).find('.h-down').removeClass('h-down').addClass('y-up');

})



$('.more').find('li').on('click',function(){
    $(this).toggleClass('bgg')
})
