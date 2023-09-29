console.log("link successful")

const button_click = () => {
    //console.log("click")
    let txt = document.getElementById("bc40").value;
    for(let i=0;i<10;i++){
        console.warn(txt);
    }
}
const loaded = () =>{
    let inp = document.getElementById("bc40");
    let val = inp.value;
    console.log("Input: ",val);
    inp.value = "Hello";
    console.debug(inp.value);
}