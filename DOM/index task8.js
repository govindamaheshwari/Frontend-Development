var form=document.querySelector('#addForm');
var  itemList=document.getElementById("items");
var filter=document.getElementById("filter");
var input=document.createElement("input");
var but=document.querySelector("#lag");
console.log(but);
input.type="text";
input.classNmae="form-control mr-2";
input.id="lack";

form.insertBefore(input,but);
console.log(form);

console.log(itemList);
console.log(form);
form.addEventListener('submit',addItems);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);
function addItems(e){
    e.preventDefault();
    console.log(1);
    var newItem=document.getElementById("item").value;
    // newItem.textContent="hello";
    console.log(newItem);
    var li=document.createElement('li');
    li.className="list-group-item";
    var NewItem=document.getElementById("lack").value;
    li.appendChild(document.createTextNode(newItem+" "+NewItem));
    


    var deleteBtn=document.createElement("button");
    deleteBtn.className="btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    var editBtn=document.createElement("button");
    editBtn.className="btn btn-sm float-right edit";
    editBtn.style.backgroundColor="green";
    editBtn.appendChild(document.createTextNode("edit"));
    li.appendChild(editBtn);
    itemList.appendChild(li);
    
}

function removeItem(e){
    console.log(1);

    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure?")){
            var li=e.target.parentElement;
            console.log(li);
            itemList.removeChild(li);
        }
    }
}
function filterItems(e){
    var text=e.target.value.toLowerCase();
    console.log(text);
    var items=itemList.getElementsByTagName("li");
    console.log(items);
    Array.from(items).forEach(myfunction);
    function myfunction(item){
        var itemName=item.firstChild.textContent;
        console.log(itemName);
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.dislay="block";
        }
        else{
            item.style.display="None";
        }
    
    }
}




