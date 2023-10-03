let users;
let user = null;
const loaded = () => {
    let URLdata = document.URL.split('?')[1]
    let ID = +URLdata.split('=')[1]
    getUserByPrimaryKey(ID)
}
const getUserByPrimaryKey = (inKey) =>{
let http = new XMLHttpRequest();
http.responseType = "json";
http.open("get",`http://localhost:5555/api/users/${inKey}`,true);
http.onload = function(){
    user = http.response;
    console.log(http.response);
    display(http.response);
}
http.send();
}
const display = (user) =>{
    let tbody = document.getElementById("UserTableBody");
    tbody.innerHTML = "";//clear TBODY
        let tr = "<tr>";
        tr+=`<td> ${user.id} </td>`;
        tr+=`<td> ${user.firstname} ${user.lastname} </td>`;
        tr+=`<td> ${user.username} </td>`;
        tr+=`<td> ${user.phone} </td>`;
        tr+=`<td> ${user.isReviewer ? 'Yes':'No'} </td>`;
        tr+=`<td> ${user.isAdmin ? 'Yes':'No'} </td>`;
        tr += "</tr>";

        tbody.innerHTML+=tr;
}
const rng1 = () =>{
    let x=1;
    x = Math.ceil(((Math.random()*3)));
    return x;
}
const remove = () =>{
    let http = new XMLHttpRequest();
    http.responseType = "json";
    http.open("Delete",`http://localhost:5555/api/users/${user.id}`,true);
    http.onload = function(){
    user = http.response;
    console.log(http.response);
    //display(http.response);
    }
    http.send();
    document.location = "getUsers.html";
}