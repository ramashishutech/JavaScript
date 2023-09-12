//Q5 Sort the arry from lowest to highes
const arry=[15,23,75,54,50,61,97,85,96]
function AscendingOder(){

    for(var z=1;z<arry.length;z++){//this loop chek the [1] index and if index (z)value is less than arry lenght
        for(var x=0;x<z;x++){ //this stetment chek index[0]and x[0]index is less index[z] or not
            

            if(arry[x]>arry[z]){ //this is chek if arry index[x]is greterthan arry[z]
                var store=arry[z]; //store variable store the value of arr[z]
                arry[z]=arry[x];     //the arry [z] store in array [x]          
                arry[x]=store; //arry[x]value is store in store variable
                
            }
            
        } 
    } 
   console.log(arry);
}
AscendingOder();
function DesendingOder(){//this is a funtion

for(z=0;z<=arry.length;z++){//this loop is cheak arry index [z]and if index is [z]grterthan arry .lenght
    for(var x=0;x<z;x++){//this loop is cheak arry index if index [x]is lessthan index[z]
        if(arry[x]<arry[z]){//if array [x]is lesssthan arry index[z]
            var store=arry[z];//arry [z]is store in the sotore variable
            arry[z]=arry[x];//hear is arry[z] define in arry[x]
            arry[x]=store;//hear is arry [x] define the sotre variable
        }
        
    }
   
}
console.log(arry);
}DesendingOder();