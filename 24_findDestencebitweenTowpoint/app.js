function getDistance(){
    var a=document.getElementById("X1").value
    var x1=parseInt(a);
    var b=document.getElementById("X2").value
    var x2=parseInt(b); 
    var c=document.getElementById("Y1").value
    var y1=parseInt(c); 
    var d=document.getElementById("Y2").value
    var y2=parseInt(d);
    let x=y2-y1;
    
    let y=x2-x1;

    
    let z= Math.sqrt(x*x+y*y);
    document.getElementById("result").innerHTML= z
}
