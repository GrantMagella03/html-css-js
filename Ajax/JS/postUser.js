let users;
const loaded = () =>{
    //let user = getDataFromHtml();
    //postUser(user);
}
const getDataFromHtml = () => {
    let user = {};
    user["id"] = 0;
    user.firstname = document.getElementById("PFirstName").value;
    user.lastname = document.getElementById("PLastName").value;
    user.username = document.getElementById("PUserName").value;
    user.password = "Train@MAX"
    user.phone = document.getElementById("PPhone#").value;
    user.email = document.getElementById("PEmail").value;
    user.isReviewer = document.getElementById("PReviewer").checked;
    user.isAdmin = document.getElementById("PAdmin").checked;
    console.log(user);
    return user;
}

const postUser = (user) =>{
let http = new XMLHttpRequest();
http.responseType = "json";
http.open("POST",`http://localhost:5555/api/users/`,true);
http.setRequestHeader('Content-type', 'application/json')
http.onload = function(){
    console.log(http.response);
    //display(http.response);
}
http.send(JSON.stringify(user));

}
const display = (user) =>{
    let tbody = document.getElementById("UserTableBody");
    tbody.innerHTML = "";//clear TBODY
    let tr = "<tr>";
    tr+=`<td> ${user.id} </td>`;
    tr+=`<td> ${user.firstname} </td>`;
    tr+=`<td> ${user.lastname} </td>`;
    tr+=`<td> ${user.username} </td>`;
        tr+=`<td> ${user.phone} </td>`;
        tr+=`<td> ${user.email} </td>`;
        tr+=`<td> ${user.isReviewer ? 'Yes':'No'} </td>`;
        tr+=`<td> ${user.isAdmin ? 'Yes':'No'} </td>`;
        tr += "</tr>";

        tbody.innerHTML+=tr;
}
const save = () => {
    let user = getDataFromHtml();
    postUser(user);
}