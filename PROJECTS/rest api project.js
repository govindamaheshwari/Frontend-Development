var forms =document.getElementById("btn");
var form =document.getElementById("uni")
var price=document.getElementById('sp');
var product=document.getElementById('pn');
var descp=document.getElementById('descp');
var category=document.getElementById('category');
var uie=document.getElementById("eitems");
var uif=document.getElementById("fitems");
var uisc=document.getElementById("scitems");
var a=0;
var b;

reload();

forms.addEventListener('click',local);
function local(e){
        e.preventDefault();
        let  myobj={
            Sellingprice:price.value,
            Description:descp.value,
            Category:category.value,
            Product:product.value,

        }
        
        console.log('myobj',myobj);
        if (a==0){
            axios.post('https://crudcrud.com/api/f4f57b5228514aefb5ff007b2d512f82/appointmentData',myobj)
                .then((res)=>{
                    console.log('aaa>>',res)
                showNewUserOnScreen(res.data)
                }).catch((err)=>console.log(err))
        }
        else{
            
            axios.put(`https://crudcrud.com/api/f4f57b5228514aefb5ff007b2d512f82/appointmentData/${b}`,myobj)
            .then((re)=>{
                console.log(re);
                reload();
                
              
            }).catch((err)=>console.log(err))  
        }
        let myobj_serialized=JSON.stringify(myobj);
        
        localStorage.setItem(myobj.Description,myobj_serialized)
        console.log(localStorage);
}

function showNewUserOnScreen(x){
    var parentName=document.createElement("li");
    parentName.id=x._id
    parentName.textContent=x.Sellingprice+"-"+x.Product+"-"+x.Description+"-"+x.Category;
     var deletes=document.createElement("button");
     var text=document.createTextNode("Delete User"); 
    deletes.appendChild(text);
    parentName.appendChild(deletes);
    var edits=document.createElement("button");
  
    var text=document.createTextNode("Edit User");
    edits.appendChild(text);
    parentName.appendChild(edits);
    if (x.Category=='Electronics items'){
        uie.appendChild(parentName);
    }
    else if (x.Category=='Food items')
    {
        uif.appendChild(parentName);
    }else
    {
        uisc.appendChild(parentName);
    }



    
    deletes.addEventListener('click',remove);
    function remove(e){
        e.preventDefault();
        console.log(e.target)
        localStorage.removeItem(x.Description)
        
        ;
        axios.delete(`https://crudcrud.com/api/f4f57b5228514aefb5ff007b2d512f82/appointmentData/${parentName.id}`)
        if (x.Category=='Electronics items'){
            uie.removeChild(parentName);
        }
        else if (x.Category=='Food items')
        {
            uif.removeChild(parentName);
        }else
        {
            uisc.removeChild(parentName);
        }
    }


    edits.addEventListener('click',edit);
    function edit(e){
        e.preventDefault();
        a=1;
        price.value=""
        descp.value=""
        category.value=''
        product.value=''
        b=parentName.id;
        console.log(b)
        price.value=x.Sellingprice
        product.value=x.Product
        descp.value=x.Description
        category.value=x.Category
        localStorage.removeItem(x.Description);
        if (x.Category=='Electronics items'){
            uie.removeChild(parentName);
        }
        else if (x.Category=='Food items')
        {
            uif.removeChild(parentName);
        }else
        {
            uisc.removeChild(parentName);
        }
    
    }
        
}

function reload() {
    a=0;
    uie.innerHTML = '';
    uif.innerHTML = '';
    uisc.innerHTML = '';
    axios.get('https://crudcrud.com/api/f4f57b5228514aefb5ff007b2d512f82/appointmentData')
        .then((res)=>{
        console.log('sss>',res)
        for (var i=0;i<res.data.length;i++){
            showNewUserOnScreen(res.data[i])
        }
}).catch((err)=>console.log(err))
}
    

