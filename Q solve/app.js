





























//print the even number form the 1 to 100
// let x="";
// for(i=1; i<=10; i++){
//     console.log(i);
// }
// //print the even number 1 to 100;
// let y="";
// for(m=1; m<=10; m++){
    
//     if(m%2==0){
//         console.log("print the even number"+m);
//     }
//     else{
//         //console .log("print the odd number"+m);
//     }
// }

// //Q3 Add the arry index value

// const arry=[12 ,23,23,23,23,23,];
// const sum=arry[0] +arry[1]+arry[2] +arry[3] +arry[4] +arry[5];
// console.log(sum);


//     }
//     else{
//         console.log("print the postive number",n[i]);
//     }
    
// }



//  } 
//  console.log(arry);
// }
//     DesendingOder();

// 
// 
// function test_prime(n)
// {

//   if (n===1)
//   {
//     return false;
//   }
//   else if(n === 2)
//   {
//     return true;
//   }else
//   {
//     for(var x = 2; x < n; x++)
//     {
//       if(n % x === 0)
//       {
//         return false;
//       }
//     }
//     return true;  
//   }
// }



//rpublic class First100Pr

// function binarySearch(value, list) {
//   let first = 0;    //left endpoint 
//   let last = list.length - 1;   //right endpoint 
//   let position = -1;
//   let found = false;
//   let middle;
//   while (found === false && first <= last) {
//       middle = Math.floor((first + last)/2);
//       if (list[middle] == value) {
//           found = true;
//           position = middle;
//       } else if (list[middle] > value) {  //if in lower half 
//           last = middle - 1;
//       } else {  //in in upper half 
//           first = middle + 1;
//       }
//   }
//   return position;
// }binarySearch()
// console.log(binarySearch("ashish"))
         //0,1,2,3,4,5
// let arry=[12,3,2,4,5,3]
// //var z=  0,1,2,3,4,5,
// function AssendingOder(){
//     for(var i=1;i<arry.length;i++){
//         for(var z=0;i>z;z++){//1,2,3
//             if(arry[i]>arry[z]){//4>3
//                //W console.log([i]);
//                // console.log([z]);
//                 var store=arry[i]//4
//                // console.log(arry[i]);
//                 arry[i]=arry[z]//3
//                //console.log(arry[z]);
//                 arry[z]=store 
//                 console.log(arry[z]);

//                  //console.log(arry);
//             }
//         }
//     }console .log(arry);
// }AssendingOder()
// this is array 
//              -: Secstion 07 :- 
//          lower index                 upper index
var myfrind=['ashish','anand','ravi','rahul'];
 //  index = 0       , 1      ,2    ,   3 ;
console.log('this is last value in Array :-'+" "  +myfrind[myfrind.length-1]);//it is return the last index value
console.log('length of array :'+"  "+myfrind.length);//it is return the array length

//after Es6 we have for in and for  of loop

var a=['vishal','sudama','ramu','deepak']
for(let element in a){
    console.log('Index :'+" "+element);//return the index value
}
 for(let i of a){
    console.log('IndexValue :- '+" "+ i);//return the index value

}

//   ** Array.property for each() callas function fo each element in the array
var a=['vishal','sudama','ramu','deepak']
    a.forEach(function(element,index,array){
        console.log(element +   'index'+  index  +" " +array);
    }) 

