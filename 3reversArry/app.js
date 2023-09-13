

// let a=["Anand","Ravi","Rahul","Ashish"]

//     for(var i=a.length;i>=0;i--){
//         console.log(a[i]);
//     }




function reverseString(str) {
str=document.getElementById('str').value
    
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    document.getElementById('result').innerHTML=newString
    return newString;
    

}

document.getElementById("str").innerHTML=str

