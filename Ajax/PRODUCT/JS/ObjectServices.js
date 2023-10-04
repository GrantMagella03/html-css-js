const url = "http://localhost:5555/api/"
//getall
const getObjList = (objType) =>{
    return $.getJSON(`${url}${objType}`);
}
const getObj = (objType,ID) =>{
    return $.getJSON(`${url}${objType}/${ID}`)
}
    
