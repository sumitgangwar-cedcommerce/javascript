$(document).ready(function(){
    var div = $('.div_img>div');
    var now = 0;
    div.hide().first().show();
    $("#nex").on("click" , function(){
        div.eq(now).hide();
        now = (now+1<div.length) ? now+1:0;
        div.eq(now).show();
    });
    $("#pre").on("click" , function(){
        div.eq(now).hide();
        now = (now>0) ? now-1:div.length-1;
        div.eq(now).show();
    });
});