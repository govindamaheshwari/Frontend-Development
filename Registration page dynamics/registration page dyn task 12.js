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
    axios.post('https://crudcrud.com/api/643980f6809d4136a5fac3e529f67a64/appointmentData',{myobj})
        .then((res)=>{
            console.log(res)
            showNewUserOnScreen(res.data)
        }).catch((err)=>console.log("err"))

    
    
    


    



    let myobj_serialized=JSON.stringify(myobj);
    
    localStorage.setItem(f2.value,myobj_serialized)
    console.log(localStorage);
}

    function showNewUserOnScreen(x){
        var parentName=document.createElement("li");
            parentName.id=x._id
        
            
        parentName.textContent=x.myobj.name+"-"+x.myobj.email+"-"+x.myobj.phoneNo;
            //parentName.id=f2.value;
        var deletes=document.createElement("button");
            //deletes.id=f2.value;
            //console.log(parentName);

            var text=document.createTextNode("delete");
            deletes.appendChild(text);
            parentName.appendChild(deletes);
            uii.appendChild(parentName);

            var edits=document.createElement("button");
  
            var text=document.createTextNode("edit");
            edits.appendChild(text);
            parentName.appendChild(edits);
            uii.appendChild(parentName);
            //var del=document.getElementByI

            deletes.addEventListener('click',remove);
            function remove(e){
                console.log(e.target)
                e.preventDefault();
                axios.delete(`https://crudcrud.com/api/643980f6809d4136a5fac3e529f67a64/appointmentData/${parentName.id}`)
                    .then((re)=>console.log('succesful'))
                localStorage.removeItem();
                uii.removeChild(parentName);
            }


}
// window.addEventListener("DOMContentLoaded",()=>{
//         axios.get('https://crudcrud.com/api/643980f6809d4136a5fac3e529f67a64/appointmentData')
//             .then((res)=>{
//                 console.log(res.data)
//                 for (var i=0;i<res.data.length;i++){
//                     showNewUserOnScreen(res.data[i])
//                 }
//             }).catch((err)=>console.log("err"))
            
        

// })


    