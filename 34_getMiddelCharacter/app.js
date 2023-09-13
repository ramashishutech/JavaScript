function getMiddle()
  {
    let str=document.getElementById("str").value
    if (str.length % 2 == 1) {
      document.getElementById("result").innerHTML=str.substring((str.length / 2)+1, (str.length / 2)) 
    } else if (str.length % 2 == 0) {
      document.getElementById("result").innerHTML =str.substring((str.length / 2)-1, (str.length / 2)+1)
    }
  }
  
  