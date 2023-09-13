// program to find the HCF or GCD of two integers



// take input

//const number1 = 10;//prompt('Enter a first positive integer: ');
//const number2 = 15;//prompt('Enter a second positive integer: ');
function findHcf(){
    let hcf;
let a=document.getElementById("str").value
let number1=parseInt(a);
let b=document.getElementById("str1").value
let number2=parseInt(b);
if(number1<=0 || number2 <=0 ){
    hcf = 0;
    document.getElementById("result").innerHTML=(`HCF of ${number1} and ${number2} is ${hcf}.`);
}else{
    for (let i = 1; i <= number1 && i <= number2; i++) {
    
        // check if is factor of both integers
        if( number1 % i == 0 && number2 % i == 0) {
            hcf = i;
        }
    }
    document.getElementById("result").innerHTML=(`HCF of ${number1} and ${number2} is ${hcf}.`);   
}

}

//console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);
