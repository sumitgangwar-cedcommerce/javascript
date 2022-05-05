$(document).ready(function(){
    $("table").on("click" , "#add" , function(){
        console.log("assd");
        $("table").append('<tr id="tex"><td><input type="text" placeholder="Enter Class"></td><td><input type="text" placeholder="Enter Board"></td><td><input type="text" placeholder="Enter Marks"></td><td><input type="text" placeholder="Enter Division"></td><td><button id="add">+</button></td><td><button id="del">-</button></td></tr>');
    });
    $("table").on("click","#del" , function(){
        $(this).closest("tr").remove();
    });
});