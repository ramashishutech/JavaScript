// Set the date we're counting down to
var countDownDate = new Date("Aug 22, 2023 09:50:30").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 550);

  // Display the result in the element with id="result"
   document.getElementById("result").innerHTML = days + " "+" Day " + hours + "  Hour "
   + minutes + " Mints " + seconds + "  Seconde ";
/*console.log(days + "D " + hours + "H "
   + minutes + "M " + seconds + "S ");*/
  //If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
     document.getElementById("result").innerHTML = " Time Up !";
    //console.log('time up');
  }
},);