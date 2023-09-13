function maxNumber(str){

 var str=document.getElementById('str').value
 var numbers=str. split(",")
 arr=numbers.map((str)=> Number(str));
 console .log(typeof arr);
var max =[];


for (let i = 0; i < arr.length; i++) {
   // console.log(i);
     if (arr[i] > max) {
       // console.log(numbers[i]);
      max = (arr[i]);
      
      
    }
document.getElementById("result").innerHTML=max;
}
}

//console.log(maxNumber.max());
