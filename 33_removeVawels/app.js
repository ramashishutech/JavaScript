

// Javascript program to remove
// vowels from a String
function remVowel()
{let str=document.getElementById("str").value
	let vawels = [ 'a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U' ];
			
	let result = "";
	
	for(let i = 0; i < str.length; i++)
	{
		
		if (!vawels.includes(str[i]))
		{
			result += str[i];
			
		}
	}
	document.getElementById("result").innerHTML= result;
}




