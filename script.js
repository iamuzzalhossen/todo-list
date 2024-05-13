const addMyTask = document.getElementById("addTask");
const myTaskList = document.getElementById("taskList");

function addTaskNow(){
    if(addMyTask.value === ""){
        alert("Sorry! Please write something first.");
    } else{
        let li = document.createElement("li");
        li.innerHTML = addMyTask.value;
        myTaskList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    addMyTask.value = "";
    saveData();
}

myTaskList.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", myTaskList.innerHTML);
}

function showData(){
    myTaskList.innerHTML = localStorage.getItem("data");
}
showData();




