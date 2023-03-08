let header=document.querySelector("#main-header");
header.style.borderBottom="solid black";
var input=document.querySelector("input");
//input.value="hello";
console.log(input.value);
var inp=document.querySelector('input[type="submit"]');
//console.log(inp.value="send");
var lii=document.querySelector('li:nth-child(2)');
console.log(lii.textContent);
lii.style.background="green";
var liii=document.querySelector('li:nth-child(3)');
liii.style.opacity="0";
var titles=document.querySelectorAll('li');
titles[1].style.color="red";
for (let i=0;i<titles.length;i++){
    if (i%2==0){
        titles[i].style.background="grey"
    }
}





