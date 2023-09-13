



function rot13() {
    var rotation = document.getElementById("rot_level").value



    let val = document.getElementById("str").value
    var str = val.toUpperCase()
    console.log('str is :', str)
    let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // let input1 = 'abcdefghijklmnopqrstuvwxyz'
    var output = input.substring(rotation) + input.substring(0, rotation)
    console.log(output);
    //console.log('output is :',output)
    // let output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm~!@#$%^&*_/?-+=,.<>0123456789';
    let encoded = '';
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < input.length; j++) {

            if (str[i] === input[j]) {
                var index = input.indexOf(input[j])
                if (val[i] === val[i].toUpperCase()) {
                    encoded += output[index]
                } else {
                    var temp = output[index]
                    encoded+=temp.toLocaleLowerCase()
                }


            }

        }
    }

    document.getElementById("result").innerHTML = encoded;
}
//rot13();

//console.log(rot13("yadav"));

