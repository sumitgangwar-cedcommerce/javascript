var pro_arr = [
    {
        "Sku" : 101, 
        "Name" : "Product 101",
        "Price" :"150.00",
        "Quantity" :50,
    },
    {
        "Sku" : 102, 
        "Name" : "Product 102",
        "Price" :"100.00",
        "Quantity" :20,
    }
];
$(document).ready(function(){
    print_arr();
    $("#add_product").click(function(){
        add_pro();
    });
    // $("#add_product").click(function() {add_pro()});
}); 
function check_input(){
    let sku = $("#product_sku").val();
    let name = $("#product_name").val();
    let price = $("#product_price").val();
    let quantity = $("#product_quantity").val();
    if(sku=="" || isNaN(sku)){
        if(sku=="") alert("SKU field is empty");
        else alert("SKU field should be an integer");
        $("#product_sku").css("background-color" , "red");
        return false;
    }
    else if(sku!="" && !isNaN(sku)){
        $("#product_sku").css("background-color" , "white");
        
    }   
    if(name=="" || !isNaN(name)){
        if(name=="") alert("Name field is empty");
        else alert("Name field should be an string");
        $("#product_name").css("background-color" , "red");
        
    }
    else if(name!="" && !isNaN(name)){ 
        $("#product_name").css("background-color" , "white");
        
    }
    
    if(price=="" || isNaN(price)){
        if(price=="") alert("Price field is empty");
        else alert("Price field should be an integer");
        $("#product_price").css("background-color" , "red");
        return false;
    }
    else if(price!="" && !isNaN(price)){ 
        $("#product_price").css("background-color" , "white");
        
    }
    
    if(quantity=="" || isNaN(quantity)){
        if(quantity=="") alert("Quantity field is empty");
        else alert("Quantity field should be an integer");
        $("#product_Quantity").css("background-color" , "red");
        return false;
    }
    else if(quantity!="" && !isNaN(quantity)){ 
        $("#product_quantity").css("background-color" , "white");
        
    }
    return true;
}
function print_arr(){
    $("#res_table").text("");   
    let txt = '<tr>'+
    '<th>'+'SKU'+'</th>'+
    '<th>'+'Name'+'</th>'+
    '<th>'+'Price'+'</th>'+
    '<th>'+'Quantity'+'</th>'+
    '<th>'+'Action'+'</th>'+
    '</tr>';

    for(let i=0;i<pro_arr.length;i++){
        txt+='<tr>'+
        '<td>'+pro_arr[i].Sku+'</td>'+
        '<td>'+pro_arr[i].Name+'</td>'+
        '<td>'+'$'+pro_arr[i].Price+'</td>'+
        '<td>'+pro_arr[i].Quantity+'</td>'+
        '<td><a href="#" class="edit" onclick="edit_row(this)">Edit</a><a href="#" class="delete" onclick = delete_row(this)>Delete</a></td>'+
        '</tr>';
    }
    // $("#res_table").text("");
    $("#res_table").append(txt);
}
function delete_row(t){
    var val = prompt("","Are you sure Want to delete this item");
    console.log(val);
    if(val){
        let sku_id = t.closest("tr").childNodes[0].textContent;
        let ind = find_ind(sku_id);
        pro_arr.splice(ind , 1);
        print_arr();
    }
    // let sku_id = t.closest("tr").childNodes[0].textContent;
    // let ind = find_ind(sku_id);
    // pro_arr.splice(ind , 1);
    // print_arr();
}
function find_ind(sku){
    for(let i=0;i<pro_arr.length;i++){
        if(pro_arr[i].Sku==sku) return i;
    }
}
function edit_row(t){
    let sku_id = t.closest("tr").childNodes[0].textContent;
    let ind = find_ind(sku_id);
    $("#product_sku").val(pro_arr[ind].Sku);
    $("#product_name").val(pro_arr[ind].Name);
    $("#product_price").val(pro_arr[ind].Price);
    $("#product_quantity").val(pro_arr[ind].Quantity);
    $("#add_product").val("Update Product");
    $("#add_product").unbind('click');
    $("#add_product").click(function(){
        update_row(t);
    })
}
function update_row(t){
    let sku_id = t.closest("tr").childNodes[0].textContent;
    let ind = find_ind(sku_id);
    pro_arr[ind].Sku = $("#product_sku").val();
    pro_arr[ind].Name = $("#product_name").val();
    pro_arr[ind].Price = $("#product_price").val();
    pro_arr[ind].Quantity = $("#product_quantity").val();
    print_arr();
    $("#add_product").val("Add");
    $("#add_product").unbind('click');
    $("#add_product").click(function(){
        add_pro();
    });
    
}
function add_pro(){
    console.log("sndv");
    if(check_input()){
        let item =
            {
                "Sku" : $("#product_sku").val(), 
                "Name" : $("#product_name").val(),
                "Price" :$("#product_price").val(),
                "Quantity" :$("#product_quantity").val()
            };
        pro_arr.push(item);
        print_arr();
         
    }
}