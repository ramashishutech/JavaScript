//create a function that will coptilize the first letter 

function upperCase(data){
	var strring=document.getElementById(str).value
	var str1=strring.split(" ")
	var str=str1.join("")

	const legend = 'abcdefghijklmnopqrstuvwxyz';
	const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	
	for(let i =0 ; i < data.length; i++ ){ // [anil , yadav]
		let rec = data[i]; // anil
		//console.log([i]);
		const el = rec[0]; // a , n, i , l = > a
		//console .log(rec[0]);
		const index = legend.indexOf(el); //  0 
		//console.log(legend.indexOf(el));
		if(index !== -1){ // true 
			rec = rec.replace(el, UPPER[index]); // A => anil => Anil
			console.log(rec.replace(el,UPPER[index]));
		    console.log(rec); // Anil
			record.push(rec); // Anil
		}
	}

	document.getElementById("result").innerHTML=record
 };
 


 //console.log(str)
