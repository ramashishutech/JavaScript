


//Q11




function findMissing() {

	let arr = document.getElementById("str").value
	let arry1 = arr.split(",");
	console.log('array1 data is :', arry1);

	let arry2 = document.getElementById("str").value
	let arr1 = arry2.split(",");
	let l = arry1.length;//declear the lenght of array1
	let l1 = arry2.length;//declear the lenght of array2
	for (let i = 0; i < l; i++)//this loop start 1 to run arry of length

	{


		for (var j = 0; j < l1; j++) //this loop start run o to run seconde array of length

			if (arry1[i] == arry2[j])//if array1[index] equial to array2[index]

				break;//heare is code break

		if (j == l1)//if j equal to array2 of length

			console.log(arry1[i] + " ");
		document.getElementById("result").innerHTML = (arry1[i] + " ");
		//console.log(arry1[i]);//console the arry1[index]
	}
}



	//findMissing(arry1,arry2,l,l1);//call the function



