$(document).ready(function(){
    setInterval(function(){
        $('.test p:first-child').css("color",randomcol());
        $('.test p:last-child').css("color" , randomcol());
    },5000);
});
function randomcol() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }