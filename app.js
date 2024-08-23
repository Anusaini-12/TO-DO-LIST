let addbtn = document.querySelector("button");
let ol = document.querySelector("ol");
let inp = document.querySelector("input");
let reset = document.querySelector(".reset");


addbtn.addEventListener("click",function add(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    item.classList.add("list");

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
   
    if(inp.value != ""){
    item.appendChild(delBtn);
    ol.appendChild(item);
    inp.value= "";
    }
    else{
        alert("Please enter something in the task!");
    }
});

ol.addEventListener("click", (event) => {
   if(event.target.nodeName == "BUTTON"){
    event.target.parentElement.remove();
   }
});


reset.addEventListener("click",()=> {
    ol.innerText = ""; 
});
