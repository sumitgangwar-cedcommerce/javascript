$(document).ready(function(){
    console.log("snc"); 
    // $("button").click(function(){
    //     txt = 
    //     '<ul>'+
    //         '<li>'+
    //             '<a href="#">Tshirt</a>'+
    //             '<button onclick="add_item(this)">+</button>'+
    //         '</li>'+
    //     '</ul>';
    //     $(this).closest("li").append(txt);
    // });
});

function add_item(t){
    txt ='<ul>'+ 
        '<li>'+
            '<a href="#">Tshirt</a>'+
            '<button onclick="add_item(this)">+</button>'+
        '</li>'+'</ul>';
    $(t).closest("li").append(txt);
}