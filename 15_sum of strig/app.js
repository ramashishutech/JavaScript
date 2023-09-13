
// sum two string and out find string

function sumTostring(x,y){
var x = document.getElementById("str1").value;
var y = document.getElementById("str2").value;   
var z = parseInt(x) + parseInt(y);
var s=z.toString();


document.getElementById("result").innerHTML ="Sum of "+x+" and "+y+" is :" +s;
}