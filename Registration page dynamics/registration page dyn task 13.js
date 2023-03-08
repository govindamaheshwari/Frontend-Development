var forms =document.getElementById("btn");
var form =document.getElementById("uni")
console.log(form);
var f1=document.getElementById('fname');
var f2=document.getElementById('email');
var f3=document.getElementById('number');
var uii=document.getElementById("items");
var a=0;
var b;
console.log(345)

forms.addEventListener('click',local);

function local(e){
    e.preventDefault();
    let  myobj={
        name:f1.value,
        email:f2.value,
        phoneNo:f3.value,
    }
    f1.value=""
    f2.value=""
    f3.value="" 
        if (a==0){
       axios.post('https://crudcrud.com/api/643980f6809d4136a5fac3e529f67a64/appointmentData',{myobj})
        .then((res)=>{
            console.log(res)
            showUserOnScreen(res.data)
        }).catch((err)=>console.log("err"))
        }
        else{
            axios.put(`https://crudcrud.com/api/643980f6809d4136a5fac3e529f67a64/appointmentData/${parentName.id}`,myobj
            ).then((re)=>console.log('edit'))
            
        }
    
    let myobj_serialized=JSON.stringify(myobj);
    
    localStorage.setItem(email.value,myobj_serialized)
    console.log(localStorage);

    function showUserOnScreen(x){
        var parentName=document.createElement("li");
        parentName.id=x._id
        b=x._id
        parentName.textContent=x.myobj.name+"-"+x.myobj.email+"-"+x.myobj.phoneNo;
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
        var edits=document.createElement("button");
        var text=document.createTextNode("edit");
        edits.appendChild(text);
        parentName.appendChild(edits);
        uii.appendChild(parentName);
        edits.addEventListener('click',edit);
        function edit(e){
                        e.preventDefault();
                        a=1
                        f1.value=x.myobj.name
                        f2.value=x.myobj.email
                        f3.value=x.myobj.phoneNo
                        localStorage.removeItem(f2.value);
                        uii.removeChild(parentName);
        }
            

        
    }
}
