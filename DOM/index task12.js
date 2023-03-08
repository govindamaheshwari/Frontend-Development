var form =document.getElementById("btn");
var f1=document.getElementById('fname');
var f2=document.getElementById('email');
var f3=document.getElementById('number');
var f4=document.getElementById('calldate');
var f5=document.getElementById('calltime');
form.addEventListener('click',local);
function local(e){
    e.preventDefault();
    let  myobj={
        name:f1.value,
        email:f2.value,
        phoneNo:f3.value,
        date:f4.value,
        time:f5.value
    }
    let myobj_serialized=JSON.stringify(myobj);
    
    localStorage.setItem(f2.value,myobj_serialized)
    console.log(localStorage);
}


    