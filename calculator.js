var txt = "";

function myfun(t){
    if(t.value=="="){
        let str = document.getElementById("inp").value; 
    
        try{
            document.getElementById("err").innerHTML="";
            document.getElementById("inp").value = eval(str);
        } 
        catch{
            clear_txt();
            document.getElementById("err").innerHTML="Input expression is wrong";
        }
    } 
    else    document.getElementById("inp").value+=t.value;
}
function clear_txt(){
    document.getElementById("inp").value="";
}
