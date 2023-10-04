$(()=>{
    let URLdata = document.URL.split('?')[1];
    let ID = +URLdata.split('=')[1];
    console.log("Ready")
    getVendor(ID);
    $("#remove").on("click",()=>{
        remove(ID);
    })
});
// use .hide to hide stuff
let users;
let user = null;
const getVendor = (inKey) =>{
    $.getJSON(`http://localhost:5555/api/vendors/${inKey}`,true)
        .done((res)=>{
            console.log(res);
            display(res);
        })
        .fail((err)=>{
            console.error(err);
        })
}
const display = (vendor) =>{
    let tbody = $("#VendorTableBody");
    tbody.empty();
    let tr = $("<tr></tr>");
    tr.append($(`<td> ${vendor.id} </td>`));
    tr.append($(`<td> ${vendor.code} </td>`));
    tr.append($(`<td> ${vendor.name} </td>`));
    tr.append($(`<td> ${vendor.address} </td>`));
    tr.append($(`<td> ${vendor.city} </td>`));
    tr.append($(`<td> ${vendor.state} </td>`));
    tr.append($(`<td> ${vendor.zip} </td>`));
    tr.append($(`<td> ${vendor.phone} </td>`));
    tr.append($(`<td> ${vendor.email} </td>`));

    tbody.append(tr);
}


const remove = (inKey) =>{
    let http = new XMLHttpRequest();
    http.responseType = "json";
    http.open("Delete",`http://localhost:5555/api/vendors/${inKey}`,true);
    http.onload = function(){
    user = http.response;
    console.log(http.response);
    }
    http.send();
    document.location = "getVendors.html";
}