function helper(){
    a = document.getElementById("idn").value;
    b = document.getElementById("idn1").value;
    c = document.getElementById("idn2").value;

    const arr = [a,b,c];


    console.log(a);
    console.log(b);
    console.log(c);


    const n_table = document.getElementById("tab");
    const n_tr = document.createElement("TR");
    for(i=0;i<3;i++){
        let n_td = document.createElement("TD");
        t_node = document.createTextNode(arr[i]);
        n_td.appendChild(t_node);
        n_tr.appendChild(n_td);
    }
    n_table.appendChild(n_tr);
}