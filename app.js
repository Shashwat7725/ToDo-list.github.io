const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container");

function addTask(){
    if(inputBox.value === '')
    {
        alert('You must write something');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)
//by using this saveData method the data is saved in browser history
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML); 
    //listContainer's inner html is set in local storage
    //with the name of "data"
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("d
    
    ata");
}

showTask();