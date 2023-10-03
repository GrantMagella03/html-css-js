$(()=>{
    get();
});
let vendors;

const get = () =>{
    $.getJSON("http://localhost:5555/api/vendors",true)
        .done((res)=>{
            console.log(res);
            display(res);
        })
        .fail((err)=>{
            console.error(err);
        })
}
const display = (vendors) =>{
    
    let tbody = $("#VendorTableBody");
    tbody.empty();
    for(let u of vendors){
        let tr = $("<tr></tr>");
        tr.append($(`<td> ${u.id} </td>`));
        tr.append($(`<td> ${u.code} </td>`));
        tr.append($(`<td> ${u.name} </td>`));
        tr.append($(`<td> ${u.address} </td>`));
        tr.append($(`<td> ${u.city} </td>`));
        tr.append($(`<td> ${u.state} </td>`));
        tr.append($(`<td> ${u.zip} </td>`));
        tr.append($(`<td> ${u.phone} </td>`));
        tr.append($(`<td> ${u.email} </td>`));

        let a1 = $( `<a href='getvendor.html?id=${u.id}'>Detail</a>`);
        let sep  = $("<span> | </span>");
        let a2 = $( `<a href='putVendor.html?id=${u.id}'>Edit</a>`);
        let tda = $("<td></td>");
        tda.append(a1);
        tda.append(sep);
        tda.append(a2);
        tr.append(tda);

        tbody.append(tr);
        
    }
}
