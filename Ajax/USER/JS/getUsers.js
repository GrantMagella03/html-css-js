$(()=>{
    getUsers();
});
let users;

const getUsers = () =>{
    /*
    let http = new XMLHttpRequest();
    http.responseType = "json";
    http.open("get","http://localhost:5555/api/users",true);
    http.onload = function(){
        console.log(http.response);
        display(http.response);
    }
    http.send();
    */
    $.getJSON("http://localhost:5555/api/users",true)
        .done((res)=>{
            console.log(res);
            display(res);
        })
        .fail((err)=>{
            console.error(err);
        })
}
const display = (users) =>{
    /*
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
    */
    let tbody = $("#UserTableBody");
    tbody.empty();
    for(let u of users){
        let tr = $("<tr></tr>");
        tr.append($(`<td> ${u.id} </td>`));
        tr.append($(`<td> ${u.firstname} ${u.lastname} </td>`));
        tr.append($(`<td> ${u.username} </td>`));
        tr.append($(`<td> ${u.phone} </td>`));
        tr.append($(`<td> ${u.isReviewer ? 'Yes':'No'} </td>`));
        tr.append($(`<td> ${u.isAdmin ? 'Yes':'No'} </td>`));

        let a1 = $( `<a href='getUserByPrimaryKey.html?id=${u.id}'>Detail</a>`);
        let sep  = $("<span> | </span>");
        let a2 = $( `<a href='putUser.html?id=${u.id}'>Edit</a>`);
        let tda = $("<td></td>");
        tda.append(a1);
        tda.append(sep);
        tda.append(a2);
        tr.append(tda);

        tbody.append(tr);
        
    }
}
