 function calculet(str){
    str = document.getElementById('str').value;
    let arr = str.split(",")

 var sum=0;
 for(var i=0;i<arr.length;i++){
   let arr1 = parseFloat(arr[i])
     sum +=arr1
     document.getElementById('result').innerHTML = sum;
    console.log(sum);
 };
}
// var string='2.1,2,3,4,5.5';
// var arry=string.split(',');
// console.log(arry);
// var sum=0;
// for(var i=0;i<arry.length;i++){
//     var add=parseInt(arry[i])
//     sum += add
//     //console.log(sum);
// }
// console.log((sum));