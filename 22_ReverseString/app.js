//program to reverse a string

function reverseString() {
 let str=document.getElementById("str").value

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    document.getElementById("result").innerHTML= newString;
}
