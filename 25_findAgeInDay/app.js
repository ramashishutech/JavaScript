function canvartAgetoDay(age){
    return age*365
}
console.log(canvartAgetoDay(20));
var days = (new Date() - new Date(2002, 7, 18)) / (1000 * 60 * 60 * 24);
//            (today)          (then)             (milliseconds per day)

console.log(days);