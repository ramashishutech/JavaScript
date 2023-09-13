function numberVailder(code,Number){
    let res = Number.toString();
    if(code=="+91" && res.length==10){
        return true
    }
    else{
        return false
    }

}console.log(numberVailder("+91",756585145));
