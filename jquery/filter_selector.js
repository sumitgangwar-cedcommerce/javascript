var products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];

let text = "<tr>"+"<th>"+"Id"+"</th>"+"<th>"+"Name"+"</th>"+"<th>"+"Brand"+"</th>"+"<th>"+"Operating System"+"</th>"+"<th>"+"Remove"+"</th>"+"</tr>";

function print_arr(){
    text = "<tr>"+"<th>"+"Id"+"</th>"+"<th>"+"Name"+"</th>"+"<th>"+"Brand"+"</th>"+"<th>"+"Operating System"+"</th>"+"<th>"+"Remove"+"</th>"+"</tr>";
    products.forEach(myfun);
    document.getElementById("res").innerHTML=text;
}

function myfun(item){
    text+="<tr>"+"<td>"+item.id+"</td>"+"<td>"+item.name+"</td>"+"<td>"+item.brand+"</td>"+"<td>"+item.os+"</td>"+"<td onclick='remove_fun(this)'>"+"X"+"</td>"+"</tr>";
}
function remove_fun(a){
    a.closest("tr").style.display="none";
}

$(document).ready(function(){
    print_arr();
    $("#brand").on("change" , function(){
        var os = $("#os").val();
        var brand = $("#brand").val();
        if(os=="") printByBrand(brand);
        else printBoth(os , brand);
    });
    $("#os").on("change" , function(){
        var os = $("#os").val();
        var brand = $("#brand").val();
        if(brand=="") printByOs(os);
        else printBoth(os , brand);
    });
    $("#btn").on("click" , function(){
        let item = $("#search").val();
        for(let i=0;i<6;i++){
            if(products[i].id==item || products[i].name==item){
                let s_txt =  "<tr>"+"<th>"+"Id"+"</th>"+"<th>"+"Name"+"</th>"+"<th>"+"Brand"+"</th>"+"<th>"+"Operating System"+"</th>"+"</tr>";
                s_txt+="<tr>"+"<td>"+products[i].id+"</td>"+"<td>"+products[i].name+"</td>"+"<td>"+products[i].brand+"</td>"+"<td>"+products[i].os+"</td>"+"</tr>";
                document.getElementById("res2").innerHTML=s_txt; 
                break;
            }
            
        }
    });
});

function printByOs(os){
    // console.log(os);
    let txt =  "<tr>"+"<th>"+"Id"+"</th>"+"<th>"+"Name"+"</th>"+"<th>"+"Brand"+"</th>"+"<th>"+"Operating System"+"</th>"+"</tr>";
    for(let i=0;i<6;i++){
        if(products[i].os==os){
            txt+="<tr>"+"<td>"+products[i].id+"</td>"+"<td>"+products[i].name+"</td>"+"<td>"+products[i].brand+"</td>"+"<td>"+products[i].os+"</td>"+"</tr>";
        }
    }
    document.getElementById("res").innerHTML=txt;
}
function printByBrand(brand){
    console.log("ncfjisd"); 
    console.log(brand);
    
    let txt =  "<tr>"+"<th>"+"Id"+"</th>"+"<th>"+"Name"+"</th>"+"<th>"+"Brand"+"</th>"+"<th>"+"Operating System"+"</tr>";
    
    for(let i=0;i<6;i++){
        // console.log(products[i].brand);
        
        if(products[i].brand==brand){
            txt+="<tr>"+"<td>"+products[i].id+"</td>"+"<td>"+products[i].name+"</td>"+"<td>"+products[i].brand+"</td>"+"<td>"+products[i].os+"</td>"+"</tr>"
        }
    }
    document.getElementById("res").innerHTML=txt;
}
function printBoth(os , brand){
    console.log(os , brand);
    let txt =  "<tr>"+"<th>"+"Id"+"</th>"+"<th>"+"Name"+"</th>"+"<th>"+"Brand"+"</th>"+"<th>"+"Operating System"+"</th>"+"</tr>";
    for(let i=0;i<6;i++){
        if(products[i].brand==brand && products[i].os==os){
            txt+="<tr>"+"<td>"+products[i].id+"</td>"+"<td>"+products[i].name+"</td>"+"<td>"+products[i].brand+"</td>"+"<td>"+products[i].os+"</td>"+"</tr>"
        }
    }
    document.getElementById("res").innerHTML=txt;
}