// here we write logic behind To-Do list Application
// get reference from todo container
const TaskInput = document.getElementById('taskInput');
const AddTask = document.getElementById('addTask');
const TaskList = document.getElementById('taskList');

// render task 
// function to render all the save task from local storage
function renderTasks(){
    // clear existing task
    TaskList.innerHTML = "";
    // render task or retrieve task from local storage
    const tasks = JSON.parse(localStorage.getItem("Tasks")) || [];

    // render all task during loading time
    tasks.forEach((taskText,index)=>{
        // add an li element on render time
        const li = document.createElement('li');
        li.textContent = taskText; // inside li text

        // delete button adding from rendering time
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";

        // delete Functionality
        deleteBtn.onclick = ()=>{
            deleteTask(index);
        };
        // render tasklist and delete button render in my UI
        li.appendChild(deleteBtn);
        TaskList.appendChild(li);
    });
}
// add functionality
function addTask(){
    const task = TaskInput.value.trim();
    if(!task){
        alert("Please enter valid task");
        return;
    }
    const tasks = JSON.parse(localStorage.getItem("Tasks")) || []; // retrieve existing todo task from local storage
    tasks.push(task);
    TaskInput.value = ""; // empty Task Input field

    localStorage.setItem("Tasks",JSON.stringify(tasks)); // save with my local storage
};
// delete task
function deleteTask(index){
const tasks = JSON.parse(localStorage.getItem("Tasks")) || []; // get task from local storage
  tasks.splice(index, 1); // Remove that index 
  localStorage.setItem("Tasks", JSON.stringify(tasks)); // save remaining task into my local storage
  renderTasks(); 
}
AddTask.addEventListener("click", addTask);

// Load tasks on first time page load
window.addEventListener("load", renderTasks);