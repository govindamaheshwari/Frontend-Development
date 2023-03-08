var items=document.getElementsByClassName("list-group-item");
items[2].style.background="green";
console.log(items);
console.log(items[1]);
items[1].style.fontWeight="bold";
for (let i=0;i<items.length;i=i+1){
    items[i].style.fontWeight="bold";
}