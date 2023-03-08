var forms =document.getElementById("btn");
var form =document.getElementById("uni")
var emailId=document.getElementById('email');
var amount=document.getElementById('amount');
var descp=document.getElementById('descp');
var category=document.getElementById('category');
var uii=document.getElementById("items");

forms.addEventListener('click',local);
function local(e){
    e.preventDefault();
    let  myobj={
        ExpenseAmount:amount.value,
        Description:descp.value,
        Category:category.value,
        Email:emailId.value,

    }
    amount.value=""
    descp.value=""
    category.value=''
    emailId.value=''
    console.log('myobj',myobj);
    let myobj_serialized=JSON.stringify(myobj);
    
    localStorage.setItem(myobj.Email,myobj_serialized)
    console.log(localStorage);

    var parentName=document.createElement("li");
    parentName.textContent=myobj.Email+"-"+ myobj.ExpenseAmount+"-"+myobj.Description+"-"+myobj.Category;
    var deletes=document.createElement("button");

    var text=document.createTextNode("X"); 
    deletes.appendChild(text);
    parentName.appendChild(deletes);
    var edits=document.createElement("button");
  
    var text=document.createTextNode("edit");
    edits.appendChild(text);
    parentName.appendChild(edits);
    uii.appendChild(parentName);

    
    deletes.addEventListener('click',remove);
    function remove(e){
        e.preventDefault();
        localStorage.removeItem(emailId.value);
        uii.removeChild(parentName);
    }

    edits.addEventListener('click',edit);
    function edit(e){
        e.preventDefault();
        console.log('edit',myobj);
        emailId.value=myobj.Email
        amount.value=myobj.ExpenseAmount
        descp.value=myobj.Description
        category.value=myobj.Category
        localStorage.removeItem(emailId.value);
        uii.removeChild(parentName);
        console.log('key',localStorage.getItem(myobj.Email))

    }
    
}
