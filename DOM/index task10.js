var form =document.getElementById("btn");
form.addEventListener('click',local);

var f1=document.getElementById('fname');
var f2=document.getElementById('email');
var f3=document.getElementById('number');
var f4=document.getElementById('calldate');
var f5=document.getElementById('calltime');
function local(e){
    e.preventDefault();
    localStorage.setItem('name',f1.value);
    localStorage.setItem('email',f2.value);
    localStorage.setItem('number',f3.value);
    localStorage.setItem('date',f4.value);
    localStorage.setItem('time',f5.value);
}
console.log(localStorage);












    




  

