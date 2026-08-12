let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");


// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();



addBtn.addEventListener("click", function(){

    let text = taskInput.value;


    if(text === ""){
        return;
    }


    let task = {

        id: Date.now(),
        name:text,
        completed:false

    };


    tasks.push(task);


    saveTasks();

    displayTasks();


    taskInput.value="";

});





function displayTasks(){

    taskList.innerHTML="";


    tasks.forEach(function(task){


        let div=document.createElement("div");

        div.classList.add("task");


        if(task.completed){
            div.classList.add("completed");
        }


        div.innerHTML=`

        <span>${task.name}</span>

        <div>

        <button onclick="completeTask(${task.id})">
        ✓
        </button>


        <button onclick="deleteTask(${task.id})">
        X
        </button>


        </div>

        `;


        taskList.appendChild(div);


    });


}




function deleteTask(id){

    tasks = tasks.filter(function(task){

        return task.id !== id;

    });


    saveTasks();

    displayTasks();

}




function completeTask(id){

    tasks.forEach(function(task){

        if(task.id === id){

            task.completed = !task.completed;

        }

    });


    saveTasks();

    displayTasks();

}




function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}