
const findNestedSum = () => {
    let a=document.getElementById("str").value
    let b= parseInt(a);
    console.log(b);
    let arr= b.split(",")
    console.log(a);
   let sum = 0;
   for(let len = 0; len < arr.length; len++){
      sum += Array.isArray(arr[len]) ? findNestedSum(arr[len]) :
      arr[len];
   };
   
   document.getElementById("result").innerHTML=sum
};
console.log(findNestedSum(arr));
var sum = 0;
let arr = [
   5,
   7,
   [ 4, [2], 8, [1,3], 2 ],
   [ 9, [] ],
   1,
   8
];
function findSum(arr) {
  arr.forEach((item) => {
 
  // will check if first element is number then will add to sum

    if (typeof item === 'number') {
      sum += item;
    } else {
      
      // checks if coming element is again array then repeat the operation
      findSum(item);
    }
  });
}


findSum(arr);
console.log(sum);