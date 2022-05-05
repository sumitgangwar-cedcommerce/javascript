$(document).ready(function(){
    $("#btn").click(function(){
        var txt1 = $("#txt1").val();
        var txt2 = $("#txt2").val();
        console.log(txt1 , txt2);
        if(txt1==""){
            $("#txt1").css("background-color" , "red");
            alert("Enter Your First Name");
        }
        if(txt2==""){
            $("#txt2").css("background-color" , "red");
            alert("Enter Your Last Name");
        }
        
    });
});