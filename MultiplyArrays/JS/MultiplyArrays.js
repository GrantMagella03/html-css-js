/**
 * Multiply EACH number in both array and
 * add up all the products displaying the
 * sum
 */
 
const array1 = [ 7, 9, 5, 3, 25 ];
const array2 = [ 6, 13, 4, 7, 17 ];
 
const calculate = () => {
    let sum = 0;

    for (let a of array1){
        for (let b of array2){
            sum+=a*b
        }
    }
    
    console.log(sum)
}
 
calculate();