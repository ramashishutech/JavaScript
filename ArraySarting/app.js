//Array Sarting Methaod


 const student=["ashihs","rahul","vivek","bolu"];
 let c=student.sort()//this methode is sort value Alphabetical in array
 document.write(c);

 const point=[40,100,1,5,25,10];
 let r=point.sort(function(a,b){return b-a}); // this methode doing the  sort Assending order 
 document.write(r);
 let p=point.sort(function(a,b){return a-b});//this methode doing the  sort desending order 
 document.write(p);


//this is revers methode in Array

const Boy=["Anmol","Anshika","Monika","Reeta"];
let b=Boy.reverse()//this methode revers value in array
document.write(b);


