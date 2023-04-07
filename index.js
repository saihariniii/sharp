const first_el = document.querySelector(".list-group-item");
const collection=document.querySelectorAll(".list-group-item");
first_el.style.backgroundColor="Blue";
for (let i = 0; i < collection.length; i++) {
  if(i==3){
    collection[i].textContent="";
    collection[i].style.border="none";
  }
}
