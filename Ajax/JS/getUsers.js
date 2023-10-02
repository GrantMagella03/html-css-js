
let users;

const getUsers = () =>{
let http = new XMLHttpRequest();
http.responseType = "json";
http.open("get","http://localhost:5555/api/users",true);
http.onload = function(){
    console.log(http.response);
    display(http.response);
}
http.send();
}
const display = (users) =>{
    let tbody = document.getElementById("UserTableBody");
    tbody.innerHTML = "";//clear TBODY
    for(let u of users){
        let tr = "<tr>";
        tr+=`<td> ${u.id} </td>`;
        tr+=`<td> ${u.firstname} ${u.lastname} </td>`;
        tr+=`<td> ${u.username} </td>`;
        tr+=`<td> ${u.phone} </td>`;
        tr+=`<td> ${u.isReviewer ? 'Yes':'No'} </td>`;
        tr+=`<td> ${u.isAdmin ? 'Yes':'No'} </td>`;
        tr+=`<td>`
        //let href = `getUserByPrimaryKey.html?id=${u.id}`
        tr+= `<a href='getUserByPrimaryKey.html?id=${u.id}'>Detail</a> | `
        tr+= `<a href='putUser.html?=${u.id}'>Edit</a>`
        tr+=`</td>`
        tr += "</tr>";

        tbody.innerHTML+=tr;
    }
}
