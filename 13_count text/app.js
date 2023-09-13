


 
function countString(){
    var m =document.getElementById("str").value;
 //var string=m.split(" ");

count=0;

    for(var i=0;i<m.length;i++){
        //console.log(string [i]);

        if(m[i]==' '){//chack if string have space
            //console.log(count);//count the string
        }else{
           count++;// add the count the string
        }
    }
    document.getElementById('result').innerHTML= count
}
