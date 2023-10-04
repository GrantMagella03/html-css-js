let oType = "products";
$(()=>{
    let URLdata = document.URL.split('?')[1];
    let ID = +URLdata.split('=')[1];
    console.log("Ready")
    getObj(oType,ID)
    .done((res)=>{
        get(res)
    });
    $("#buttonRemove").on("click",()=>{

    })
});

const get = (obj) =>{
    let tbody = $("#TableBody");
    tbody.empty();
    let tr = $("<tr></tr>")
    $(`<td>${obj.id}</td>`).appendTo(tr);
    $(`<td>${obj.partNbr}</td>`).appendTo(tr);
    $(`<td>${obj.name}</td>`).appendTo(tr);
    $(`<td>$${obj.price} ${obj.unit}</td>`).appendTo(tr);
    $(`<td>${obj.photopath}</td>`).appendTo(tr);
    getObj("vendors", obj.vendorID)
    .done((res)=>{
        $(`<td><a href='../../../ajax/VENDOR/getVendor.html?id=${res.id}'>${res.name}</a></td>`).appendTo(tr);
    })
    tr.appendTo(tbody)
}