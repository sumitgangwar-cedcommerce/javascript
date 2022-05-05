$(document).ready(function(){
    $("#txt2").on("keyup",function(){
        var pa1 = $("#txt1").val();
        var pa2 = $("#txt2").val();
        if(pa1!=pa2){   
            $("#not_pass").text("Password didn't match");
            $("#not_pass").css("color","red");
        }

        else{
            $("#not_pass").text("Password match");
            $("#not_pass").css("color","green");
        }
    });
});
