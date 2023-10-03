let vendors;
const loaded = () =>{
}
const getDataFromHtml = () => {
    let vendor = {};
    vendor["id"] = 0;
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

const post = (vendor) =>{
$.ajax({
    method: "POST",
    url: `http://localhost:5555/api/vendors/`,
    data: JSON.stringify(vendor),
    contentType: "application/json"

})

}
const save = () => {
    let vendor = getDataFromHtml();
    post(vendor);
    document.location = "getVendors.html";
}