function getCount(){
    let str=document.getElementById("str").value
    var vowelsCont=0
    const vowels=["a","e","i","o","u","A","E","I","O","U"]
    for(let char of str){
        if(vowels.includes(char)){
            vowelsCont++
        }
    }
    document.getElementById("result").innerHTML= vowelsCont
}