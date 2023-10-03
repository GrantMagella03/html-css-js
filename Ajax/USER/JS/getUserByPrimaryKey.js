$(()=>{
    let URLdata = document.URL.split('?')[1];
    let ID = +URLdata.split('=')[1];
    console.log("Ready")
    getUserByPrimaryKey(ID);
    $("#remove").on("click",()=>{
        remove(ID);
    })
});

let users;
let user = null;
/*
const loaded = () => {
    let URLdata = document.URL.split('?')[1];
    let ID = +URLdata.split('=')[1];
    getUserByPrimaryKey(ID);
}*/
const getUserByPrimaryKey = (inKey) =>{
    /*
    let http = new XMLHttpRequest();
    http.responseType = "json";
    http.open("get",`http://localhost:5555/api/users/${inKey}`,true);
    http.onload = function(){
        user = http.response;
        console.log(http.response);
        display(http.response);
    }
    http.send();
    */
    $.getJSON(`http://localhost:5555/api/users/${inKey}`,true)
        .done((res)=>{
            console.log(res);
            display(res);
        })
        .fail((err)=>{
            console.error(err);
        })
}
const display = (user) =>{
    let tbody = $("#UserTableBody");
    tbody.empty();
    let tr = $("<tr></tr>");
    tr.append($(`<td> ${user.id} </td>`));
    tr.append($(`<td> ${user.firstname} ${user.lastname} </td>`));
    tr.append($(`<td> ${user.username} </td>`));
    tr.append($(`<td> ${user.phone} </td>`));
    tr.append($(`<td> ${user.isReviewer ? 'Yes':'No'} </td>`));
    tr.append($(`<td> ${user.isAdmin ? 'Yes':'No'} </td>`));

    tbody.append(tr);
}


const remove = (inKey) =>{
    let http = new XMLHttpRequest();
    http.responseType = "json";
    http.open("Delete",`http://localhost:5555/api/users/${inKey}`,true);
    http.onload = function(){
    user = http.response;
    console.log(http.response);
    //display(http.response);
    }
    http.send();
    document.location = "getUsers.html";
}