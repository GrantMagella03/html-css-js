let oType = "products";
$(()=>{
    getObjList(oType)
    .done((res)=>{
        getAll(res)
    });

});

const getAll = (objs) =>{
    let tbody = $("#TableBody");
    tbody.empty();
    for(let o of objs){
        let tr = $("<tr></tr>")
        $(`<td>${o.id}</td>`).appendTo(tr);
        $(`<td>${o.partNbr}</td>`).appendTo(tr);
        $(`<td>${o.name}</td>`).appendTo(tr);
        $(`<td>$${o.price} ${o.unit}</td>`).appendTo(tr);
        $(`<td><a href='getProduct.html?id=${o.id}'>Detail</a><span> | </span><a href='putVendor.html?id=${o.id}'>Edit</a></td>`).appendTo(tr);
        tr.appendTo(tbody)
    }
}