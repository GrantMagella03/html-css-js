//Write a program to calculate and output the min, max, and average of this array of numbers
 
const nbrs = [96, 59, 4, 68, 58, 48, 17, 76, 32, 71, 11, 6, 3, 32, 85, 13, 60, 1, 27, 15, 96, 31, 75, 5, 2];
//min
const min = () =>{
    let min = Infinity;
    for(let i of nbrs){
        if(i<min){
            min = i;
        }
    }
    console.log(min);
}
const max = () =>{
    let max = -Infinity;
    for(let i of nbrs){
        if(i>max){
            max=i;
        }
    }
    console.log(max);
}
const avg = () =>{
    let sum = 0;
    for(let i of nbrs){
        sum += i;
    }
    sum/=nbrs.length;
    console.log(sum)
}
min();
max();
avg();