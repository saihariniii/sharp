const collection = document.getElementsByClassName("list-group-item");
for (let i = 0; i < collection.length; i++) {
  if(i==2){
    collection[i].style.backgroundColor = "green";
  }else{
    collection[i].style.backgroundColor = "red";
    collection[i].style.fontWeight="bold";
  }
}

