




function find_century( ) {
	var y=document.getElementById("str").value
    var year=parseInt(y)
	if (year <= 0){
	console.log("0 and negative is not allow" + "for a year");
		document.getElementById("result").innerHTML=("0 and negative is not allow" + "for a year");		
	}	
	else if (year <= 100){
		console.log("1st century\n");
		document.getElementById("result").innerHTML=("1st century\n");
	}

	else if (year % 100 == 0){
		console.log(parseInt(year / 100) + " century");
	    document.getElementById("result").innerHTML=(parseInt(year / 100) + " century")
	}
	else
	{
		console.log(parseInt(year / 100) + 1 + " century");
		document.getElementById("result").innerHTML=(parseInt(year / 100) + 1 + " century");
	}
}

