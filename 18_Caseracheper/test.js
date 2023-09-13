function rot13(rotation) {
  //  let str=document.getElementById("str").value
    let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*_?/-+=,.<>0123456789';
    var output= input.substring(rotation)+input.substring(0,5)
    console.log('output is :',output)
    var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm~!@#$%^&*_/?-+=,.<>0123456789';
    let encoded = '';
    for (var i=0; i < str.length; i++) {
        let index = input.indexOf(str[i]);
        encoded += output[index];
    }

    document.getElementById("result").innerHTML=encoded;
} 
rot13(5);
