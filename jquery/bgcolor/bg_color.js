$(document).ready(function(){
    $("#odd").click(function(){
        $("table tr:odd").css("background-color" , "Blue");
    });
    $("#even").click(function(){
        $("table tr:even").css("background-color" , "LightGray")
    });
    
});