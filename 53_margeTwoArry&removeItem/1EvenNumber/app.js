//print the evennumber name 1to10
function print(number){
    number=document.getElementById("number").value
    
for(i=1;i<=number;i++){
    //console.log(i);//this console print the i value 0,1,2,3,4,5,6,7,8,9,10
    if(i%2==0){//this condition check if i devide by two and reminder equil to zero
       // console .log(i);//this console print 0,2,4,6,8,10,
        document.getElementById("result").innerHTML+= `${i}, `;
    }

    
}
document.getElementById("number").value=number

}