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
    axios.post('https://crudcrud.com/api/ffcc5a56335a4176ba1ec45d7b9841ac/appointmentData',{myobj})
        .then((res)=>{
            console.log(res)
        }).catch((err)=>console.log("err"))

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

function showNewUserOnScreen(x){
    var parentName=document.createElement("li");
        parentName.textContent=x.myobj.name+"-"+x.myobj.email+"-"+x.myobj.phoneNo;
        //parentName.id=f2.value;
        var deletes=document.createElement("button");
        //deletes.id=f2.value;
        //console.log(parentName);

        var text=document.createTextNode("delete");
        deletes.appendChild(text);
        parentName.appendChild(deletes);
        uii.appendChild(parentName);
}
window.addEventListener("DOMContentLoaded",()=>{
        axios.get('https://crudcrud.com/api/ffcc5a56335a4176ba1ec45d7b9841ac/appointmentData')
            .then((res)=>{
                console.log(res.data)
                for (var i=0;i<res.data.length;i++){
                    showNewUserOnScreen(res.data[i])
                }
            }).catch((err)=>console.log("err"))


})