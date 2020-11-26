function setRem(){
    var windw=document.documentElement.clientWidth||document.body.clientWidth;
    var uiw=320;
    document.documentElement.style.fontSize=(windw/uiw)*100+'px';

}
setRem();
window.onresize=setRem;