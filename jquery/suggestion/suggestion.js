var arr = ["Rose" , "Lily" , "Lotus" , "Tulip" , "Orchid"  , "Jasmine" , "Clover" , "Celosia" , "Coral"];
let text="Suggestions: ";
$(document).ready(function(){
    $("#inp").on("keyup" , function(){
        var s = $("#inp").val();
        var sugg = [];
        
        for(i=0;i<arr.length;i++){
            var temp = arr[i].slice(0,s.length);
            if(temp==s && temp!="") sugg.push(arr[i]);
        }
        text = "Suggestions: ";
        sugg.forEach(myfunction);
        document.getElementById("sugg").innerHTML=text;
        
    });
});

function myfunction(item){
    text+=item + "<br>";
}