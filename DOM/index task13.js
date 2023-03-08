var forms =document.getElementById("btn");
var form =document.getElementById("uni")
console.log(form);
var f1=document.getElementById('fname');
var f2=document.getElementById('email');
var f3=document.getElementById('number');
var uii=document.getElementById("items");

forms.addEventListener('click',local);
function local(e){
    e.preventDefault();
    let  myobj={
        name:f1.value,
        email:f2.value,
        phoneNo:f3.value,
    }
    var parentName=document.createElement("li");
    parentName.textContent=myobj.name+"-"+myobj.email+"-"+myobj.phoneNo;
    //parentName.id=f2.value;
    var deletes=document.createElement("button");
    //deletes.id=f2.value;
    console.log(parentName);

    var text=document.createTextNode("delete");
    deletes.appendChild(text);
    parentName.appendChild(deletes);
    uii.appendChild(parentName);
    //var del=document.getElementById(f2.value);
    deletes.addEventListener('click',remove);
    function remove(e){
        e.preventDefault();
        localStorage.removeItem(f2.value);
        uii.removeChild(parentName);

    }
    

    



    let myobj_serialized=JSON.stringify(myobj);
    
    localStorage.setItem(f2.value,myobj_serialized)
    console.log(localStorage);
}