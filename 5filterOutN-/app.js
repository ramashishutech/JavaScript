//Q4 crear a funcation that filter out negative number
let n=[2,-3,4,5,6,-7,-5,-6,-17]
let negative=[];
for(i=0;i<=n.length-1;i++){
    //console.log(i);
    
    if(n[i]<0){
        console.log('print the negative number',n[i]);
    }
}