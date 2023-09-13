// //Q4 crear a funcation that filter out negative number
// let n=[2,-3,4,5,6,-7,-5,-6,-17]
// let negative=[];
// for(var i=0;i<=n.length;i++){
    
    
//     if(n[i]<0){
//         console.log('print the negative number',n[i]);
//     }
// }

function negativeArray()
    { 
         var str=document.getElementById('str').value
         var array=str.split(",");
         var Nigetive=[];
         
         
         
      


        for (var i = 0; i < array.length; i++) 
        {
            if (( array[i]) < 0){
                Nigetive.push(array[i]);
                
                
            
                  document.getElementById('result').innerHTML=Nigetive;
                    // count += array[i];
                    // if (i != array.length-2) {
                    //     document.write(", ");
                   // }
            }
        }
           // document.write( "<br>Sum negative nums: " + count)
    }
        
    ;

