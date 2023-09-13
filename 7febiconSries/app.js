// // 
function printFibonacci(number) {
  let a = 0, b = 1, c;
  console.log(a);
  console.log(b);
  for (let i = 2; i < number; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

//printFibonacci(10);

//call the function

// var number = prompt();   
// var num1 = 0, num2 = 1;  
// var next_term = 0;  
// //document.write( " Fibonacci series of the number 8: " + "<br>")  
// for (i = 1; i < number; i++) // use for loop to iterate the series till given number   
// {  
// if ( i <= 1)   
// next_term = i; // assign the variable i to next_term  
// else  
// {  
// next_term = num1 + num2; // sum the num1 and num2  
// num1 = num2;  
// num2 = next_term;  
// }  
// // print the sum of the series  
// document.write( " Adding " + num1 + " + " + next_term + " = " + (num1 + num2) + "<br>" );  
  
// }  