const collection = document.getElementsByTagName("li");
for (let i = 0; i < collection.length; i++) {
  if(i==4){
    collection[i].style.backgroundColor = "green";
  }else{
    collection[i].style.backgroundColor = "red";
    collection[i].style.fontWeight="bold";
  }
}
