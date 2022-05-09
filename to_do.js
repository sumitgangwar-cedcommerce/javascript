function myfun(btn){
    if(btn.value=="Delete") del_row(btn);
    if(btn.value=="Edit")   edit_row(btn);
}
function del_row(btn){
    btn.closest("li").style.display="none";
}
function edit_row(btn){
    btn.closest("li").style.display="none";
    document.getElementById("new-task").value=btn.closest("li").childNodes[3].textContent;
    document.getElementById("special").innerHTML="Update";
    document.getElementById("special").onclick = function() { update(btn)};
}
function update(btn){
    btn.closest("li").childNodes[3].innerHTML = document.getElementById("new-task").value;
    btn.closest("li").style.display="block";
    document.getElementById("special").innerHTML="Add";
    document.getElementById("special").onclick = function() { add_row()};
}
function add_row(){
    let label = document.getElementById("new-task").value;
    let txt = '<li>'+'<input type="checkbox" onchange="change_task(this)">'+'<input type="text">'+
    '<input type="text">'+
                '<label>'+label+'</label>'+
                '<input type="text">'+
                '<button class="edit" value="Edit" onclick="myfun(this)">Edit</button>'+
                '<button class="delete" value="Delete" onclick="myfun(this)">Delete</button>'+'</li>';
    console.log(label);
    document.getElementById("incomplete-tasks").innerHTML+=txt;    
}

function change_task(t){
    console.log(t.checked);
    if(t.checked){
        t.closest("li").style.display="none";
        let label = t.closest("li").childNodes[3].textContent;
        let txt = '<li>'+
        '<input type="checkbox" checked onchange="change_task(this)">'+
        '<input type="text">'+
        '<input type="text">'+
        '<label>'+label+'</label>'+
        '<input type="text">'+
        '<button class="edit" value="Edit" onclick="myfun(this)">Edit</button>'+
        '<button class="delete" value="Delete" onclick="myfun(this)">Delete</button>'+
        '</li>';
        document.getElementById("completed-tasks").innerHTML+=txt;
    }
    if(!t.checked){
        t.closest("li").style.display="none";
        let label = t.closest("li").childNodes[3].textContent;
        let txt = '<li>'+
        '<input type="checkbox"  onchange="change_task(this)">'+
        '<input type="text">'+
        '<input type="text">'+
        '<label>'+label+'</label>'+
        '<input type="text">'+
        '<button class="edit" value="Edit" onclick="myfun(this)">Edit</button>'+
        '<button class="delete" value="Delete" onclick="myfun(this)">Delete</button>'+'</li>';
        document.getElementById("incomplete-tasks").innerHTML+=txt;
    }
}
