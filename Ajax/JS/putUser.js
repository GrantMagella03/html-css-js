let users;
const loaded = () =>{
    let URLdata = document.URL.split('?')[1];
    let ID = +URLdata.split('=')[1];
    getUserByPrimaryKey(ID);
}
const getDataFromHtml = () => {
    let user = {};
    user.id = +document.getElementById("PID").value;
    user.firstname = document.getElementById("PFirstName").value;
    user.lastname = document.getElementById("PLastName").value;
    user.username = document.getElementById("PUserName").value;
    user.password = document.getElementById("PPassword").value;
    user.phone = document.getElementById("PPhone#").value;
    user.email = document.getElementById("PEmail").value;
    user.isReviewer = document.getElementById("PReviewer").checked;
    user.isAdmin = document.getElementById("PAdmin").checked;
    console.log(user);
    return user;
}
const getUserByPrimaryKey = (inKey) =>{
    let http = new XMLHttpRequest();
    http.responseType = "json";
    http.open("get",`http://localhost:5555/api/users/${inKey}`,true);
    http.onload = function(){
        console.log(http.response);
        display(http.response);
    }
    http.send();
}


const putUser = (user) =>{
let http = new XMLHttpRequest();
http.responseType = "json";
http.open("PUT",`http://localhost:5555/api/users/${user.id}`,true);
http.setRequestHeader('Content-type', 'application/json')
http.onload = function(){
    console.log(http.response);
    //display(http.response);
}
http.send(JSON.stringify(user));

}
const display = (user) =>{
    document.getElementById("PID").value = user.id;
    document.getElementById("PFirstName").value = user.firstname;
    document.getElementById("PLastName").value = user.lastname;
    document.getElementById("PUserName").value = user.username;
    document.getElementById("PPassword").value = user.password;
    document.getElementById("PPhone#").value = user.phone;
    document.getElementById("PEmail").value= user.email;
    document.getElementById("PReviewer").checked = user.isReviewer;
    document.getElementById("PAdmin").checked = user.isAdmin;
}
const save = () => {
    let user = getDataFromHtml();
    putUser(user);
}