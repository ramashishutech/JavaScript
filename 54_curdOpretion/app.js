
var empolyeId= 1;
var container = []

function Student(a, b, c, d) {
  this.id=empolyeId;
  this.firstName = a;
  this.lastName = b;
  this.age = c;
  this.gender = d;
}
function creatObject() {
  
  let a = document.getElementById("firstname").value
  let b = document.getElementById("lastname").value
  let c = document.getElementById("age").value
  let d = document.getElementById("gender").value
 
  var student = new Student(a, b, c, d);
  container.push(student);
  rederTbl();
  empolyeId++;
  

  
 
}
// var total=[];
function rederTbl() {
   var total=[]
  // console.log('total data is :',total);

  // console.log('container data is :',container);
  container.forEach(data => {
   

    let tr = `<tr><td>` + data.id + `</td>` +
  `<td>`+data.firstName+`</td>`+
      `<td>` + data.lastName + `</td>` +
      `<td>` + data.age + `</td>` +
      `<td>` + data.gender + `</td>`+
      `<td><input class='action' type="checkbox" id=`+data.id+`></td>` +`</td></tr>`

    total.push(tr);
  // console.log('total data :',total)
  })
  document.getElementById("tbody").innerHTML= total;
  //console.log('container data :',container)

  
}
function remove(){
   var rowToDelete = [];
   let allSelectedElement = document.getElementsByClassName('action');
  //  console.log('allSelectedElement', allSelectedElement);
   for (let index = 0; index < allSelectedElement.length; index++) {
    const element = allSelectedElement[index];
    if(element.checked){
      rowToDelete.push(element.id);
    }
    console.log(rowToDelete);
   }

   const filtercontenr = container.filter((element) => element.id !== rowToDelete);
   console.log(filtercontenr);
  //  let del = (rowToDelete, id) =>
  // rowToDelete.filter(container => container.id !== id);
  // const result = del(container, rowToDelete);
  // console.log(result);

  rederTbl()
 }











