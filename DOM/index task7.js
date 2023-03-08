let itemlist =document.querySelector('#items');
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor="grey";
itemlist.parentElement.parentElement.style.backgroundColor="grey";
console.log(itemlist.children);
console.log(itemlist.lastChild);
console.log(itemlist.firstElementChild);
console.log(itemlist.lastElementChild);
console.log(itemlist.nextSibling);
console.log(itemlist.previousElementSibling.previousElementSibling);
let newDiv =document.createElement("div");
newDiv.className="hello";
newDiv.id="kjhg";
newDiv.setAttribute("title","Hello Div");
let newDivText=document.createTextNode("Hello");
newDiv.appendChild(newDivText);
console.log(newDiv);
let container=document.querySelector('header .container');
let h1=document.querySelector('header h1');
console.log(container);
console.log(h1);
container.insertBefore(newDiv,h1);



// let newS = document.createElement("li");
// newS.innerText=`Hello`;

// console.log(newS);
// let x=document.querySelector('.list-group-item');

// let y=document.querySelector("li.innerText");

// console.log('value',x,y);
// x.insertBefore(y,newS);

let newli=document.createElement("li");
newli.className="list-group-item";
newli.innerText="hello";
console.log(newli);
let listgroup=document.querySelector('.list-group');
console.log(listgroup);
let lii=document.querySelector("li");
listgroup.insertBefore(newli,lii);
console.log(listgroup);

//console.log(listgroup);


//let li=document.querySelector('.list-group-item');
//li.innerText= 'Hello'+ `\n`+li.innerText
//console.log(typeof li.innerText)

