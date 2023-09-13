//


 
function tranglarea(){
    var a =document.getElementById("number1").value; 
    var side1= parseInt(a);
var b= document.getElementById("number2").value;
var side2=parseInt(b);;  
var c= document.getElementById("number3").value;
var side3=parseInt(c);
var s = (side1 + side2 + side3)/2;//this is semiparmiter formula
console.log(s)
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));//this is trangle of area formula
document.getElementById("Result").innerHTML=area
}
