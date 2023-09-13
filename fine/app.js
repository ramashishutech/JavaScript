// const months=["jan","march",'april','june','july'];
// const indexOfMonth=months.indexOf('june');
// console .log(indexOfMonth);
// if(indexOfMonth!=-1){
//     const updateMonth=months.splice(indexOfMonth,2);
//     console .log(months);
//     console .log(updateMonth);
// }else{
//     console.log('No such data found');
// }

//Map and Reduce Method
const array1=[1,4,9,16,25]; 
// let newArr=array1.map((curElem,index,arr)=>{
//     return curElem>9;
// })
// console.log(array1);
// console.log(newArr);
let newArr=array1.map((curElm,index,arr)=>{
    return`index no = ${index} and the value is ${curElm} belong to ${arr}`
})
console.log(newArr);