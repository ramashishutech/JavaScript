// program to find the LCM of two integers

// take input
//onst num1 = prompt('Enter a first positive integer: ');
//const num2 = prompt('Enter a second positive integer: ');
function findLcm(){
   let num1=document.getElementById("str").value
   let num2=document.getElementById("str1").value

// higher number among number1 and number2 is stored in min
let min = (num1 > num2) ? num1 : num2;//12>5  12/5


// while loop
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
       // console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        document.getElementById("result").innerHTML= min
        break;
    }
    min++;
}
}

  