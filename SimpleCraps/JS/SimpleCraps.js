const button_click_play = () => {
    let nwins = 0;
    let nloss = 0;
    let DispStr = "";
    let d1 = Math.ceil(Math.random()*6);
    let d2 = Math.ceil(Math.random()*6);
    let roll = d1+d2;
    if(roll === 7||roll === 11){
        DispStr = `${roll}`
        win(DispStr,nwins,nloss);
    } else if(roll === 2||roll === 3||roll === 12){
        DispStr = `${roll}`
        lose(DispStr,nwins,nloss);
    } else {
        DispStr = `${roll}`
        let Point = roll;
        let GameActive = true;
        while(GameActive===true){
            d1 = Math.ceil(Math.random()*6);
            d2 = Math.ceil(Math.random()*6);
            roll = d1+d2;
            if(roll === 7){
                GameActive = false
                DispStr = `${DispStr},${roll}`
                lose(DispStr,nwins,nloss);
                return;
            } else if (roll === Point){
                GameActive = false
                DispStr = `${DispStr},${roll}`
                win(DispStr,nwins,nloss);
                return;
            } else {
                continue;
            }

        }
    }
}
const win = (DispStr,nwins,nloss) =>{
    nwins++;
    DispStr = `${DispStr}||You Win`
    display(DispStr,nwins,nloss);
}
const lose = (DispStr,nwins,nloss) =>{
    nloss++;
    DispStr = `${DispStr}||You Lose`
    display(DispStr,nwins,nloss);
}
const display = (DispStr,nwins,nloss) => {
    DispStr = `${DispStr}||Wins:${nwins}|Losses:${nloss}`
    document.getElementById("MainNum").value = DispStr;
}
