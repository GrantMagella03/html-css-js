const button_click_minus = () =>{
    document.getElementById("MainNum").value--;
    CheckAndStyle();
}
const button_click_plus = () =>{
    document.getElementById("MainNum").value++;
    CheckAndStyle();
}
const CheckAndStyle = () =>{
    if(document.getElementById("MainNum").value%2==0){
        document.getElementById("MainNum").classList.add("even")
    }else{
        document.getElementById("MainNum").classList.remove("even")
    }

    if(document.getElementById("MainNum").value%3==0){
        document.getElementById("MainNum").classList.add("evenBy3")
    }else{
        document.getElementById("MainNum").classList.remove("evenBy3")
    }

    if(document.getElementById("MainNum").value%7==0){
        document.getElementById("MainNum").classList.add("evenBy7")
    }else{
        document.getElementById("MainNum").classList.remove("evenBy7")
    }
}