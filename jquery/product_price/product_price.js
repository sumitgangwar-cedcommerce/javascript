
const pro_size = {"Small":"1000", "Large":"2999", "Medium":"1738"};
const t_color = {"Light Grey":"1200", "Red":"1358", "Blue":"1554"};
$(document).ready(function(){
    $("#sel_s").on("change" , function(){
        let size = $("#sel_s").val();
        $("#s_price").text(pro_size[size]);
    });
    $("#sel_t").on("change" , function(){
        let col = $("#sel_t").val();
        $("#t_price").text(t_color[col]);
    });
});