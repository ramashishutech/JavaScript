
function checkLeapYear() {
var y=document.getElementById("str").value
    var year=parseInt(y)
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        
        console.log(year + ' is a leap year');
        document.getElementById("result").innerHTML=(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
        document.getElementById("result").innerHTML=(year + ' is not a leap year');

    }
}



