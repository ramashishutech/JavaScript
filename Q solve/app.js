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

//Q4 crear a funcation that filter out negative number
// let n=[2,-3,4,5,6,-7,-5,-6,-7]
// let postive=[];
// let negative=[];
// for(i=0;i<=n.length-1;i++){
//     //console.log(i);
    
//     if(n[i]<0){
//         console.log('print the negative number',n[i]);

//     }
//     else{
//         console.log("print the postive number",n[i]);
//     }
    
// }

//Q5 Sort the arry from lowest to highest
///          0 1 , 2 
// const arry=[15,23,75,54,50,61,97,85,96]
// function AscendingOder(){

//     for(var z=1;z<arry.length;z++){//this loop chek the [1] index and if index (z)value is less than arry lenght
//         for(var x=0;x<z;x++){ //this stetment chek index[0]and x[0]index is less index[z] or not
            

//             if(arry[x]>arry[z]){ //this is chek if arry index[x]is greterthan arry[z]
//                 var store=arry[z]; //store variable store the value of arr[z]
//                 arry[z]=arry[x];     //the arry [z] store in array [x]          
//                 arry[x]=store; //arry[x]value is store in store variable
                
//             }
            
//         } 
//     } 
//    console.log(arry);
// }
// AscendingOder();
// function DesendingOder(){//this is a funtion

// for(z=0;z<=arry.length;z++){//this loop is cheak arry index [z]and if index is [z]grterthan arry .lenght
//     for(var x=0;x<z;x++){//this loop is cheak arry index if index [x]is lessthan index[z]
//         if(arry[x]<arry[z]){//if array [x]is lesssthan arry index[z]
//             var store=arry[z];//arry [z]is store in the sotore variable
//             arry[z]=arry[x];//hear is arry[z] define in arry[x]
//             arry[x]=store;//hear is arry [x] define the sotre variable
//         }
        
//     }
   
    

//  } 
//  console.log(arry);
// }
//     DesendingOder();

//  //Q6creat a function that revers all arry
// let arry1=[1,28,45,4,51,6]
// reversArray=()=>{
//     for(let index=arry1.length;index>=0;index--){//6>=1//5>=1,
//         //console.log([index]);
//         console.log (arry1[index]);
//     }
// }
// reversArray();
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



const numbers = [75,402,85,66,78];
var max =[];

const maximum=-Infinity
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      var max = (numbers[i]);

    }
    // console.log(max);
}
console.log(max);





