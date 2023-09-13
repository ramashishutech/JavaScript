// //Q5 Sort the arry from lowest to highes
function AscendingOder(){
  var  str =document.getElementById("str").value
  let arr =str.split(",")
  arr=arr.map((d)=> Number(d));
  console.log('splited value',arr);

  console.log(arr.length)
  
    for(var z=1;z<arr.length;z++){//this loop chek the [1] index and if index (z)value is less than arry lenght
        for(var x=0;x<z;x++){ //this stetment chek index[0]and x[0]index is less index[z] or not
            

            if(arr[x]>arr[z]){ //this is chek if arry index[x]is greterthan arry[z]
                var store=arr[z]; //store variable store the value of arr[z]
                arr[z]=arr[x];     //the arry [z] store in array [x]          
                arr[x]=store; //arry[x]value is store in store variable
                
            } 
            
        } 
    } 
    document.getElementById('print').innerHTML=arr
   
}
function DesendingOder(){//this is a funtion
    var  string =document.getElementById("string").value
       let arry =string.split(",")
       arry=arry.map((d)=> Number(d));
for(z=0;z<=arry.length;z++){//this loop is cheak arry index [z]and if index is [z]grterthan arry .lenght
    for(var x=0;x<z;x++){//this loop is cheak arry index if index [x]is lessthan index[z]
        if(arry[x]<arry[z]){//if array [x]is lesssthan arry index[z]
            var store=arry[z];//arry [z]is store in the sotore variable
            arry[z]=arry[x];//hear is arry[z] define in arry[x]
            arry[x]=store;//hear is arry [x] define the sotre variable
        }
        
    }
   
}
document.getElementById("result").innerHTML=arry
}

