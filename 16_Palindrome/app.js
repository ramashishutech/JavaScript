
function checkpalindrom(){
    let text=document.getElementById("str").value;
    let string=text.split(" ").join("");
    console.log(string);
    let length=string.length
    console.log(length);
 

    for(var i=0; i<length/2;i++){
        
        
        if(string[i]!==string[length-1-i]){//r!==s
            
            console.log("it is nat palindrome")
            document.getElementById("result").innerHTML= false
               break;
        }
        else{
            console.log("it is palindrome")
            document.getElementById("result").innerHTML=true
        }
        
    } 
 
}
// var value = checkpalindrom(string);
// console.log(value);
