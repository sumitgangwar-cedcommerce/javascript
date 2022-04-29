un1 = "You Are Underweight";
ov1 = "You are Overweight";
rec1 = "Keep it up";
un=un1.fontcolor("red");
ov=ov1.fontcolor("red");
rec=rec1.fontcolor("green");
function claculate(){
    age = document.getElementById("frm").value;
    weight = document.getElementById("frm1").value;
    console.log(age);
    if(age>=5 && age<=7){
        if(weight<15)   document.getElementById("hh").innerHTML=un;
        else if(weight>20)   document.getElementById("hh").innerHTML=ov;
        else    document.getElementById("hh").innerHTML=rec;
    }
    else if(age>=8 && age<=10){
        if(weight<20)   document.getElementById("hh").innerHTML=un;
        else if(weight>25)   document.getElementById("hh").innerHTML=ov;
        else    document.getElementById("hh").innerHTML=rec;
    }
    else if(age>=11 && age<=15){
        if(weight<26)   document.getElementById("hh").innerHTML=un;
        else if(weight>30)   document.getElementById("hh").innerHTML=ov;
        else    document.getElementById("hh").innerHTML=rec;
    }
    else if(age>=16 && age<=20){
        if(weight<31)   document.getElementById("hh").innerHTML=un;
        else if(weight>40)   document.getElementById("hh").innerHTML=ov;
        else    document.getElementById("hh").innerHTML=rec;
    }
    else{
        document.getElementById("hh").innerHTML="Try with different values";
    }

}