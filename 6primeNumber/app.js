var number=1;
var calprimeNumber=[];//store the new valuw...
do{
    if(isprime(number)){
        calprimeNumber.push(number);
    }
    number++
    document.getElementById('primeNumber').innerHTML = calprimeNumber;

}while(calprimeNumber.length<100)

console.log(calprimeNumber);

function isprime(num){
    var sqretnum=Math.floor(Math.sqrt(num));

    var prime=num !=1;//num is nat equial 1......
    for(var i=2;i< sqretnum+1; i++){
        if(num%i==0){
            prime=false
            break;
        }
    }
  
    return prime;
}


function sumOfPrimeNumber() {

    var primesSum = 0
    
  
    for (var i = 0; i < calprimeNumber.length; i++) {
        var convertNumber = Number(calprimeNumber[i])
        primesSum += convertNumber;
    }

  

    return primesSum;
}

var result =sumOfPrimeNumber();
document.getElementById('sumAllPrime').innerHTML = result;

console.log('Sum of prime number is :',result)

