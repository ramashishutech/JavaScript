var arry = [[22, 10],[10, 13, 15, 14],[5, 27, 33],[12,23,34]];

var max=[];

for (var i = 0; i < arry.length; i++) {
   
    for (var j = 0; j < arry[i].length; j++) {
        if(arry[i][j]>max){
            max=(arry[i][j]);
           }
        
        }

   
   
}   
console.log(`It is max in  all arry :-` , max);

