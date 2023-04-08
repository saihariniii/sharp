//parentNode
var itemList= document.querySelector("#items");
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor="#f4f4f4";
//parentElement

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="#f4f4f4";
console.log(itemList.parentElement.parentElement);
//childNodes
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor="yellow";
//firstChild
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild.textContent);
//lastElementChild
itemList.lastElementChild.textContent="HELLO 5";
console.log(itemList.lastElementChild.textContent);
//lastChild
console.log(itemList.lastChild);
//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);
//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color="blue";
//createElement
var newDiv=document.createElement("div");

newDiv.className="hello";
newDiv.id="hello1";
newDiv.setAttribute("title","hello div");
//create text node
var newDivText= document.createTextNode("hello world");
newDiv.appendChild(newDivText);
var container=document.querySelector("header .container");
var h1=document.querySelector("header h1");
container.insertBefore(newDiv,h1);
newDiv.style.fontSize="30px";
console.log(newDiv);

