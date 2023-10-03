let vendors;
const loaded = () =>{
    let URLdata = document.URL.split('?')[1];
    let ID = +URLdata.split('=')[1];
    get(ID);
}
const getDataFromHtml = () => {
    let vendor = {};
    vendor.id = document.getElementById("PID").value;;
    vendor.code = document.getElementById("PCode").value;
    vendor.name = document.getElementById("PName").value;
    vendor.address = document.getElementById("PAddress").value;
    vendor.city = document.getElementById("PCity").value;
    vendor.State = document.getElementById("PState").value;
    vendor.zip = document.getElementById("PZip").value;
    vendor.phone = document.getElementById("PPhone").value;
    vendor.email = document.getElementById("PEmail").value;
    console.log(vendor);
    return vendor;
}
const get = (inKey) =>{
    $.getJSON(`http://localhost:5555/api/vendors/${inKey}`,true)
        .done((res)=>{
            console.log(res);
            display(res);
        })
        .fail((err)=>{
            console.error(err);
        })
}


const put = (vendor) =>{
    $.ajax({
        method: "PUT",
        url: `http://localhost:5555/api/vendors/${vendor.id}`,
        data: JSON.stringify(vendor),
        contentType: "application/json"
    
    })
}
const display = (vendor) =>{
    document.getElementById("PID").value = vendor.id;
    document.getElementById("PCode").value = vendor.code;
    document.getElementById("PName").value = vendor.name;
    document.getElementById("PAddress").value = vendor.address;
    document.getElementById("PCity").value = vendor.city;
    document.getElementById("PState").value = vendor.state;
    document.getElementById("PZip").value = vendor.zip;
    document.getElementById("PPhone").value = vendor.phone;
    document.getElementById("PEmail").value = vendor.email;
}
const save = () => {
    let vendor = getDataFromHtml();
    put(vendor);
    document.location = "getVendors.html";
}