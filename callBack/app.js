//syncronnous programming

// let a=prompt("what is youer name");
// let b=prompt("what is your age");
// let c=prompt("what is your favorite coloer?")
// console.log(a + 'is'+ b + "years old and has" + c + 'favorite color'  );

//Asynchronous programming
//console.log("Start")
// setTimeout(function(){
//     console.log("Hey i am good");
// },3000);
// console.log("End")

//CallBacks
 function LoadScript(src,CallBack){
    var script = document.createElement("script");
    script.src=src;
    script.onload=function(){
        console.log("loded Script with SRC:",src)
        CallBack(src);
    }
    document.body.appendChild(script);
}
    function hello (src){
        alert('hello Word!');
    }
    function goodmorning(){
        alert('good morning');
    }
    
 
 LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",goodmorning);
